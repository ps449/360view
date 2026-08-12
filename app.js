import { Viewer } from '@photo-sphere-viewer/core';
import { AutorotatePlugin } from '@photo-sphere-viewer/autorotate-plugin';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';

const roomsData = {
    'hall-a': {
        title: '時尚宴會廳)',
        roomName: '東京廳', 
        thumb: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
        image: 'https://photo-sphere-viewer-data.netlify.app/assets/sphere.jpg', 
        styleImage: 'https://photo-sphere-viewer-data.netlify.app/assets/sphere-test.jpg', 
        measurements: [],
        walkMarkers: [
            {
                id: 'walk-to-living',
                position: { yaw: '150deg', pitch: '-10deg' },
                html: '<div class="custom-marker"><i class="fa-solid fa-person-walking"></i> 前往客廳</div>',
                anchor: 'bottom center',
                size: { width: 100, height: 30 },
                tooltip: '點擊前往 東京廳',
                data: { targetRoom: 'hall-c' }
            }
        ]
    },
    'hall-b': {
        title: '時尚宴會廳)',
        roomName: '紐約廳', 
        thumb: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
        image: 'https://photo-sphere-viewer-data.netlify.app/assets/sphere-test.jpg', 
        styleImage: 'https://photo-sphere-viewer-data.netlify.app/assets/sphere.jpg', 
        measurements: [
            {
                id: 'measure-line-1',
                polyline: [ [1.2, 0.4], [2.5, 0.6] ],
                svgStyle: { stroke: 'white', strokeWidth: '2px' }
            },
            {
                id: 'measure-text-1',
                position: { yaw: 1.85, pitch: 0.5 },
                html: '<div class="measurement-marker">約 2.5 m</div>',
                anchor: 'center center'
            },
            {
                id: 'measure-line-2',
                polyline: [ [2.5, 0.6], [3.5, 0.2] ],
                svgStyle: { stroke: 'white', strokeWidth: '2px' }
            },
            {
                id: 'measure-text-2',
                position: { yaw: 3.0, pitch: 0.4 },
                html: '<div class="measurement-marker">約 3.0 m</div>',
                anchor: 'center center'
            },
             {
                id: 'measure-line-3',
                polyline: [ [1.2, 0.4], [1.2, -0.4] ],
                svgStyle: { stroke: 'white', strokeWidth: '2px' }
            },
            {
                id: 'measure-text-3',
                position: { yaw: 1.2, pitch: 0.0 },
                html: '<div class="measurement-marker">約 2.6 m</div>',
                anchor: 'center center'
            }
        ],
        walkMarkers: [
            {
                id: 'walk-to-living',
                position: { yaw: '30deg', pitch: '-5deg' },
                html: '<div class="custom-marker"><i class="fa-solid fa-person-walking"></i> 走出房間</div>',
                anchor: 'bottom center',
                size: { width: 100, height: 30 },
                tooltip: '點擊前往 紐約廳',
                data: { targetRoom: 'hall-c' }
            }
        ]
    },
    'hall-c': {
        title: '時尚宴會廳',
        roomName: '米蘭廳', 
        thumb: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
        image: 'https://photo-sphere-viewer-data.netlify.app/assets/sphere.jpg', 
        styleImage: 'https://photo-sphere-viewer-data.netlify.app/assets/sphere-test.jpg', 
        measurements: [],
        walkMarkers: [
            {
                id: 'walk-to-entrance',
                position: { yaw: '200deg', pitch: '-10deg' },
                html: '<div class="custom-marker"><i class="fa-solid fa-door-open"></i> 前往玄關</div>',
                anchor: 'bottom center',
                size: { width: 100, height: 30 },
                tooltip: '點擊前往  米蘭廳',
                data: { targetRoom: 'hall-a' }
            },
            {
                id: 'walk-to-bedroom',
                position: { yaw: '90deg', pitch: '-5deg' },
                html: '<div class="custom-marker"><i class="fa-solid fa-bed"></i> 前往臥室</div>',
                anchor: 'bottom center',
                size: { width: 100, height: 30 },
                tooltip: '點擊前往 米蘭廳',
                data: { targetRoom: 'hall-b' }
            }
        ]
    }
};

let viewer;
let markersPlugin;
let currentStyle = 'normal';
let isRulerActive = false;
let currentRoomId = 'hall-a';

function getRoomIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('room') || 'hall-a'; 
}

async function initViewer() {
    currentRoomId = getRoomIdFromUrl();
    const room = roomsData[currentRoomId] || roomsData['hall-a'];

    document.getElementById('header-title').textContent = room.title;
    document.getElementById('current-room-name').textContent = room.roomName;
    document.querySelector('.minimap-title').textContent = room.roomName;

    try {
        viewer = new Viewer({
            container: document.querySelector('#viewer'),
            panorama: room.image,
            loadingImg: '', 
            touchmoveTwoFingers: true, 
            mousewheelCtrlKey: true,   
            defaultYaw: '130deg',
            defaultPitch: '0deg',
            plugins: [
                [AutorotatePlugin, {
                    autostartDelay: 5000,
                    autostartOnIdle: true,
                    autorotateSpeed: '1rpm',
                }],
                [MarkersPlugin, {
                    markers: room.walkMarkers || []
                }]
            ],
            navbar: false, 
        });

        markersPlugin = viewer.getPlugin(MarkersPlugin);
        
        // Listen for marker clicks for walking
        markersPlugin.addEventListener('select-marker', (e, marker) => {
            if (marker.data && marker.data.targetRoom) {
                switchRoom(marker.data.targetRoom);
            }
        });

        viewer.addEventListener('ready', () => {
            const loader = document.getElementById('loader');
            loader.classList.add('hidden');
            setTimeout(() => { loader.style.display = 'none'; }, 1000);
        });

        viewer.addEventListener('error', (e) => {
            document.getElementById('loader-text').textContent = '圖片載入失敗，請稍後再試。';
            document.querySelector('.spinner').style.display = 'none';
            console.error('Viewer error:', e);
        });

        setupUIEvents(room);

    } catch (err) {
        console.error("初始化 Viewer 失敗:", err);
        document.getElementById('loader-text').textContent = '系統發生錯誤，無法載入全景圖。';
    }
}

function toggleMeasurements() {
    if (!markersPlugin) return;
    const room = roomsData[currentRoomId] || roomsData['hall-a'];
    
    if (isRulerActive) {
        // Remove all measurement markers
        room.measurements.forEach(m => {
            if (markersPlugin.getCurrentMarker(m.id)) {
                markersPlugin.removeMarker(m.id);
            }
        });
    } else {
        // Add all measurement markers
        room.measurements.forEach(m => {
            markersPlugin.addMarker(m);
        });
    }
    isRulerActive = !isRulerActive;
}

function setupUIEvents(room) {
    // 0. Room Gallery Switcher
    const btnRoomSwitch = document.getElementById('btn-room-switch');
    const galleryPopup = document.getElementById('gallery-popup');
    const galleryScrollContainer = document.getElementById('gallery-scroll-container');

    // Populate gallery
    galleryScrollContainer.innerHTML = '';
    Object.keys(roomsData).forEach(key => {
        const r = roomsData[key];
        const item = document.createElement('div');
        item.className = 'gallery-item' + (key === currentRoomId ? ' active' : '');
        item.innerHTML = `
            <img src="${r.thumb}" alt="${r.roomName}">
            <div class="gallery-item-label">${r.roomName}</div>
        `;
        item.addEventListener('click', () => {
            switchRoom(key);
        });
        galleryScrollContainer.appendChild(item);
    });

    btnRoomSwitch.addEventListener('click', (e) => {
        e.stopPropagation();
        galleryPopup.classList.toggle('active');
    });

    // Close gallery when clicking outside
    document.addEventListener('click', (e) => {
        if (!galleryPopup.contains(e.target) && !btnRoomSwitch.contains(e.target)) {
            galleryPopup.classList.remove('active');
        }
    });

    // 1. 2D / 3D Minimap Toggle
    const btn2d = document.getElementById('btn-2d');
    const btn3d = document.getElementById('btn-3d');
    const minimapImg = document.getElementById('minimap-img');

    btn2d.addEventListener('click', () => {
        btn2d.classList.add('active');
        btn3d.classList.remove('active');
        minimapImg.src = 'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&q=80';
    });

    btn3d.addEventListener('click', () => {
        btn3d.classList.add('active');
        btn2d.classList.remove('active');
        minimapImg.src = 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&q=80';
    });

    // 1.5 Map Enlarge Modal Logic (Refactored)
    const btnExpandMap = document.querySelector('.minimap-expand');
    const mapModal = document.getElementById('map-modal');
    const btnCloseMap = document.getElementById('btn-close-map');
    const largeMapImg = document.getElementById('large-map-img');
    const mapModalTitle = document.getElementById('map-modal-title');
    const modalBtn2d = document.getElementById('modal-btn-2d');
    const modalBtn3d = document.getElementById('modal-btn-3d');

    const image2d = 'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Higher res for large view
    const image3d = 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Higher res for large view

    btnExpandMap.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Set Title
        const currentRoomData = roomsData[currentRoomId];
        mapModalTitle.textContent = currentRoomData ? currentRoomData.title : '空間放大觀看';

        // Set initial state based on minimap
        const is2D = btn2d.classList.contains('active');
        if (is2D) {
            largeMapImg.src = image2d;
            modalBtn2d.classList.add('active');
            modalBtn3d.classList.remove('active');
        } else {
            largeMapImg.src = image3d;
            modalBtn3d.classList.add('active');
            modalBtn2d.classList.remove('active');
        }
        
        mapModal.classList.add('active');
    });

    // Modal interior toggles
    modalBtn2d.addEventListener('click', () => {
        modalBtn2d.classList.add('active');
        modalBtn3d.classList.remove('active');
        largeMapImg.src = image2d;
        // Optionally sync back to minimap
        btn2d.click(); 
    });

    modalBtn3d.addEventListener('click', () => {
        modalBtn3d.classList.add('active');
        modalBtn2d.classList.remove('active');
        largeMapImg.src = image3d;
        // Optionally sync back to minimap
        btn3d.click();
    });

    const closeMapModal = () => {
        mapModal.classList.remove('active');
    };

    btnCloseMap.addEventListener('click', closeMapModal);
    
    // Close modal when clicking outside the image
    mapModal.addEventListener('click', (e) => {
        if (e.target === mapModal || e.target.classList.contains('map-modal-body')) {
            closeMapModal();
        }
    });

    // 3. Action Buttons Logic
    const actionBtns = document.querySelectorAll('.action-btn');
    actionBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const btnEl = e.currentTarget;
            const actionText = btnEl.textContent.trim();
            
            if (actionText.includes('漫遊')) {
                const autorotate = viewer.getPlugin(AutorotatePlugin);
                if (window.isRoaming) {
                    // Stop roaming
                    window.isRoaming = false;
                    btnEl.classList.remove('active');
                    btnEl.innerHTML = '<i class="fa-solid fa-play"></i> 漫遊';
                    if (autorotate) autorotate.stop();
                    if (window.roamInterval) clearInterval(window.roamInterval);
                } else {
                    // Start roaming
                    window.isRoaming = true;
                    btnEl.classList.add('active');
                    btnEl.innerHTML = '<i class="fa-solid fa-pause"></i> 停止漫遊';
                    if (autorotate) autorotate.start();
                    
                    window.roamInterval = setInterval(() => {
                        const keys = Object.keys(roomsData);
                        const currentIndex = keys.indexOf(currentRoomId);
                        const nextIndex = (currentIndex + 1) % keys.length;
                        switchRoom(keys[nextIndex], true); // Pass true to indicate auto-switch
                        
                        // Ensure autorotate starts again after switching room
                        setTimeout(() => {
                            if (window.isRoaming && viewer) {
                                const newAutorotate = viewer.getPlugin(AutorotatePlugin);
                                if (newAutorotate) newAutorotate.start();
                            }
                        }, 1000);
                    }, 10000); // Switch every 10 seconds
                }
            } else if (actionText.includes('量尺')) {
                // Toggle active class
                btnEl.classList.toggle('active');
                
                // Update text
                if (btnEl.classList.contains('active')) {
                    btnEl.innerHTML = '<i class="fa-solid fa-ruler-combined"></i> 量尺關閉';
                } else {
                    btnEl.innerHTML = '<i class="fa-solid fa-ruler-combined"></i> 量尺開啟';
                }
                
                // Trigger logic
                toggleMeasurements();
                
            } else {
                alert(`功能「${actionText}」開發中！`);
            }
        });
    });

    // 4. Share Popup Logic
    const shareBtn = document.querySelector('.share-btn');
    const sharePopup = document.getElementById('share-popup');
    const qrcodeContainer = document.getElementById('qrcode-container');
    const shareUrlText = document.getElementById('share-url-text');
    const btnCopyUrl = document.getElementById('btn-copy-url');
    let qrcodeInstance = null;

    shareBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent document click from immediately closing it
        sharePopup.classList.toggle('active');

        if (sharePopup.classList.contains('active')) {
            const currentUrl = window.location.href;
            shareUrlText.textContent = currentUrl;

            // Generate QR Code if not already generated or if URL changed
            if (!qrcodeInstance) {
                qrcodeInstance = new QRCode(qrcodeContainer, {
                    text: currentUrl,
                    width: 150,
                    height: 150,
                    colorDark : "#000000",
                    colorLight : "#ffffff",
                    correctLevel : QRCode.CorrectLevel.H
                });
            } else {
                qrcodeInstance.clear();
                qrcodeInstance.makeCode(currentUrl);
            }
        }
    });

    // Copy to clipboard
    btnCopyUrl.addEventListener('click', () => {
        const currentUrl = window.location.href;
        navigator.clipboard.writeText(currentUrl).then(() => {
            const originalText = btnCopyUrl.textContent;
            btnCopyUrl.textContent = '已複製！';
            btnCopyUrl.style.backgroundColor = 'var(--primary)';
            btnCopyUrl.style.borderColor = 'var(--primary)';
            
            setTimeout(() => {
                btnCopyUrl.textContent = originalText;
                btnCopyUrl.style.backgroundColor = 'transparent';
                btnCopyUrl.style.borderColor = 'rgba(255, 255, 255, 0.5)';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
            alert('複製失敗，請手動複製網址');
        });
    });

    // Close share popup when clicking outside
    document.addEventListener('click', (e) => {
        if (sharePopup && !sharePopup.contains(e.target) && !shareBtn.contains(e.target)) {
            sharePopup.classList.remove('active');
        }
    });
}

function switchRoom(newRoomId, isAuto = false) {
    if (newRoomId === currentRoomId || !viewer) return;

    // If it's a manual switch and we are currently roaming, stop roaming
    if (!isAuto && window.isRoaming) {
        window.isRoaming = false;
        if (window.roamInterval) clearInterval(window.roamInterval);
        const roamBtn = Array.from(document.querySelectorAll('.action-btn')).find(b => b.textContent.includes('停止漫遊'));
        if (roamBtn) {
            roamBtn.classList.remove('active');
            roamBtn.innerHTML = '<i class="fa-solid fa-play"></i> 漫遊';
        }
        const autorotate = viewer.getPlugin(AutorotatePlugin);
        if (autorotate) autorotate.stop();
    }

    const room = roomsData[newRoomId];
    if (!room) return;

    // Update URL without reload
    const newUrl = new URL(window.location);
    newUrl.searchParams.set('room', newRoomId);
    window.history.pushState({}, '', newUrl);

    // Update global state
    currentRoomId = newRoomId;
    currentStyle = 'normal';
    document.querySelector('.feature-label').textContent = '3D變裝';

    // Turn off ruler if active
    if (isRulerActive) {
        const rulerBtn = Array.from(document.querySelectorAll('.action-btn')).find(b => b.textContent.includes('量尺'));
        if (rulerBtn) rulerBtn.click();
    }

    // Hide gallery
    document.getElementById('gallery-popup').classList.remove('active');

    // Update UI Texts
    document.getElementById('header-title').textContent = room.title;
    document.getElementById('current-room-name').textContent = room.roomName;
    document.querySelector('.minimap-title').textContent = room.roomName;

    // Update active state in gallery
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.classList.remove('active');
        if (item.querySelector('.gallery-item-label').textContent === room.roomName) {
            item.classList.add('active');
        }
    });

    // Show loader and set new panorama
    const loader = document.getElementById('loader');
    loader.style.display = 'flex';
    loader.classList.remove('hidden');

    viewer.setPanorama(room.image, { transition: 500 }).then(() => {
        // Update walk markers for the new room
        if (markersPlugin) {
            markersPlugin.clearMarkers();
            if (room.walkMarkers) {
                room.walkMarkers.forEach(m => markersPlugin.addMarker(m));
            }
        }
        
        loader.classList.add('hidden');
        setTimeout(() => { loader.style.display = 'none'; }, 800);
    });
}

document.addEventListener('DOMContentLoaded', initViewer);
