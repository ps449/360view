import { Viewer } from '@photo-sphere-viewer/core';
import { AutorotatePlugin } from '@photo-sphere-viewer/autorotate-plugin';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';


const categoriesData = {
    'fashion': { title: '時尚宴會廳', link: 'https://www.ckcchao.com/fashion', rooms: ['hall-a', 'hall-b', 'hall-c', 'hall-shanghai', 'hall-paris', 'hall-london', 'hall-fashion-all'] },
    'empire': { title: '帝國宴會廳', link: 'https://www.ckcchao.com/empire', rooms: ['empire-a', 'empire-b', 'empire-c', 'empire-d', 'empire-all'] },
    'vip': { title: 'VIP包廂', link: 'https://www.ckcchao.com/vip', rooms: ['vip-dragon', 'vip-teng', 'vip-fish', 'vip-yue', 'vip-gold', 'vip-bi', 'vip-man', 'vip-tang'] }
};

let currentCategory = 'fashion';
const roomsData = {

    'hall-a': {
        title: '時尚宴會廳',
        roomName: '東京廳', 
        thumb: './assets/images/fashion/tokyo/thumb.jpg',
        image: './assets/images/fashion/tokyo/pano.jpg', 
        defaultYaw: 0,
        defaultPitch: 0,
        styleImage: './assets/images/ui/sphere-test.jpg', 
        measurements: [
            {
                id: 'measure-height-line-a',
                polyline: [ [1.0, -0.2], [1.0, 0.5] ],
                svgStyle: { stroke: 'white', strokeWidth: '2px', strokeDasharray: '4' }
            },
            {
                id: 'measure-height-text-a',
                position: { yaw: 1.0, pitch: 0.15 },
                html: '<div class="measurement-marker">樓高 3 M</div>',
                anchor: 'center left'
            },
            {
                id: 'measure-table-text-a',
                position: { yaw: 0, pitch: -0.2 },
                html: '<div class="measurement-marker">桌子 180x60 CM<br>高 70 CM</div>',
                anchor: 'center center'
            }
        ],
        walkMarkers: [
            {
                id: 'walk-a-to-b',
                position: { yaw: '150deg', pitch: '-10deg' },
                html: '<div class="custom-marker"><i class="fa-solid fa-person-walking"></i> 前往紐約廳</div>',
                anchor: 'bottom center',
                size: { width: 130, height: 35 },
                tooltip: '點擊前往 紐約廳',
                data: { targetRoom: 'hall-b' }
            }
        ]
    },
    'hall-b': {
        title: '時尚宴會廳',
        roomName: '紐約廳', 
        thumb: './assets/images/fashion/newyork/thumb.jpg',
        image: './assets/images/fashion/newyork/pano.jpg', 
        defaultYaw: 0,
        defaultPitch: 0,
        styleImage: './assets/images/ui/sphere.jpg', 
        measurements: [
            {
                id: 'measure-height-line-b',
                polyline: [ [1.0, -0.2], [1.0, 0.5] ],
                svgStyle: { stroke: 'white', strokeWidth: '2px', strokeDasharray: '4' }
            },
            {
                id: 'measure-height-text-b',
                position: { yaw: 1.0, pitch: 0.15 },
                html: '<div class="measurement-marker">樓高 3 M</div>',
                anchor: 'center left'
            },
            {
                id: 'measure-table-text-b',
                position: { yaw: 0, pitch: -0.2 },
                html: '<div class="measurement-marker">桌子 180x60 CM<br>高 70 CM</div>',
                anchor: 'center center'
            }
        ],
        walkMarkers: [
            {
                id: 'walk-b-to-c',
                position: { yaw: '30deg', pitch: '-5deg' },
                html: '<div class="custom-marker"><i class="fa-solid fa-person-walking"></i> 前往米蘭廳</div>',
                anchor: 'bottom center',
                size: { width: 130, height: 35 },
                tooltip: '點擊前往 米蘭廳',
                data: { targetRoom: 'hall-c' }
            }
        ]
    },
    'hall-c': {
        title: '時尚宴會廳',
        roomName: '米蘭廳', 
        thumb: './assets/images/fashion/milan/thumb.jpg',
        image: './assets/images/fashion/milan/pano.jpg', 
        defaultYaw: 0,
        defaultPitch: 0,
        styleImage: './assets/images/ui/sphere-test.jpg', 
        measurements: [
            {
                id: 'measure-height-line-c',
                polyline: [ [1.0, -0.2], [1.0, 0.5] ],
                svgStyle: { stroke: 'white', strokeWidth: '2px', strokeDasharray: '4' }
            },
            {
                id: 'measure-height-text-c',
                position: { yaw: 1.0, pitch: 0.15 },
                html: '<div class="measurement-marker">樓高 3 M</div>',
                anchor: 'center left'
            },
            {
                id: 'measure-table-text-c',
                position: { yaw: 0, pitch: -0.2 },
                html: '<div class="measurement-marker">桌子 180x60 CM<br>高 70 CM</div>',
                anchor: 'center center'
            }
        ],
        walkMarkers: [
            {
                id: 'walk-to-entrance',
                position: { yaw: '200deg', pitch: '-10deg' },
                html: '<div class="custom-marker"><i class="fa-solid fa-door-open"></i> 前往東京廳</div>',
                anchor: 'bottom center',
                size: { width: 130, height: 35 },
                tooltip: '點擊前往 東京廳',
                data: { targetRoom: 'hall-a' }
            },
            {
                id: 'walk-to-bedroom',
                position: { yaw: '90deg', pitch: '-5deg' },
                html: '<div class="custom-marker"><i class="fa-solid fa-bed"></i> 前往紐約廳</div>',
                anchor: 'bottom center',
                size: { width: 130, height: 35 },
                tooltip: '點擊前往 紐約廳',
                data: { targetRoom: 'hall-b' }
            }
        ]
    },
    'hall-shanghai': {
        title: '時尚宴會廳',
        roomName: '上海廳', 
        thumb: './assets/images/fashion/shanghai/thumb.jpg',
        image: './assets/images/fashion/shanghai/pano.jpg', 
        defaultYaw: 0,
        defaultPitch: 0,
        styleImage: './assets/images/ui/sphere-test.jpg', 
        measurements: [
            {
                id: 'measure-height-line-fake',
                polyline: [ [1.0, -0.2], [1.0, 0.5] ],
                svgStyle: { stroke: 'white', strokeWidth: '2px', strokeDasharray: '4' }
            },
            {
                id: 'measure-height-text-fake',
                position: { yaw: 1.0, pitch: 0.15 },
                html: '<div class="measurement-marker">樓高 3 M</div>',
                anchor: 'center left'
            },
            {
                id: 'measure-table-text-fake',
                position: { yaw: 0, pitch: -0.2 },
                html: '<div class="measurement-marker">桌子 180x60 CM<br>高 70 CM</div>',
                anchor: 'center center'
            }
        ],
        walkMarkers: []
    },
    'hall-paris': {
        title: '時尚宴會廳',
        roomName: '巴黎廳', 
        thumb: './assets/images/fashion/paris/thumb.jpg',
        image: './assets/images/fashion/paris/pano.jpg', 
        defaultYaw: 0,
        defaultPitch: 0,
        styleImage: './assets/images/ui/sphere-test.jpg', 
        measurements: [
            {
                id: 'measure-height-line-fake',
                polyline: [ [1.0, -0.2], [1.0, 0.5] ],
                svgStyle: { stroke: 'white', strokeWidth: '2px', strokeDasharray: '4' }
            },
            {
                id: 'measure-height-text-fake',
                position: { yaw: 1.0, pitch: 0.15 },
                html: '<div class="measurement-marker">樓高 3 M</div>',
                anchor: 'center left'
            },
            {
                id: 'measure-table-text-fake',
                position: { yaw: 0, pitch: -0.2 },
                html: '<div class="measurement-marker">桌子 180x60 CM<br>高 70 CM</div>',
                anchor: 'center center'
            }
        ],
        walkMarkers: []
    },
    'hall-london': {
        title: '時尚宴會廳',
        roomName: '倫敦廳', 
        thumb: './assets/images/fashion/london/thumb.jpg',
        image: './assets/images/fashion/london/pano.jpg', 
        defaultYaw: 0,
        defaultPitch: 0,
        styleImage: './assets/images/ui/sphere-test.jpg', 
        measurements: [
            {
                id: 'measure-height-line-fake',
                polyline: [ [1.0, -0.2], [1.0, 0.5] ],
                svgStyle: { stroke: 'white', strokeWidth: '2px', strokeDasharray: '4' }
            },
            {
                id: 'measure-height-text-fake',
                position: { yaw: 1.0, pitch: 0.15 },
                html: '<div class="measurement-marker">樓高 3 M</div>',
                anchor: 'center left'
            },
            {
                id: 'measure-table-text-fake',
                position: { yaw: 0, pitch: -0.2 },
                html: '<div class="measurement-marker">桌子 180x60 CM<br>高 70 CM</div>',
                anchor: 'center center'
            }
        ],
        walkMarkers: []
    },
    'hall-fashion-all': {
        title: '時尚宴會廳',
        roomName: '時尚廳全開', 
        thumb: './assets/images/fashion/all/thumb.jpg',
        image: './assets/images/fashion/all/pano.jpg', 
        defaultYaw: 0,
        defaultPitch: 0,
        styleImage: './assets/images/ui/sphere-test.jpg', 
        measurements: [
            {
                id: 'measure-height-line-fake',
                polyline: [ [1.0, -0.2], [1.0, 0.5] ],
                svgStyle: { stroke: 'white', strokeWidth: '2px', strokeDasharray: '4' }
            },
            {
                id: 'measure-height-text-fake',
                position: { yaw: 1.0, pitch: 0.15 },
                html: '<div class="measurement-marker">樓高 3 M</div>',
                anchor: 'center left'
            },
            {
                id: 'measure-table-text-fake',
                position: { yaw: 0, pitch: -0.2 },
                html: '<div class="measurement-marker">桌子 180x60 CM<br>高 70 CM</div>',
                anchor: 'center center'
            }
        ],
        walkMarkers: []
    },
    'empire-a': {
        title: '帝國宴會廳',
        roomName: '帝國A廳', 
        thumb: './assets/images/empire/a/thumb.jpg',
        image: './assets/images/empire/a/pano.jpg', 
        defaultYaw: 0,
        defaultPitch: 0,
        styleImage: './assets/images/ui/sphere-test.jpg', 
        measurements: [
            {
                id: 'measure-height-line-fake',
                polyline: [ [1.0, -0.2], [1.0, 0.5] ],
                svgStyle: { stroke: 'white', strokeWidth: '2px', strokeDasharray: '4' }
            },
            {
                id: 'measure-height-text-fake',
                position: { yaw: 1.0, pitch: 0.15 },
                html: '<div class="measurement-marker">樓高 3 M</div>',
                anchor: 'center left'
            },
            {
                id: 'measure-table-text-fake',
                position: { yaw: 0, pitch: -0.2 },
                html: '<div class="measurement-marker">桌子 180x60 CM<br>高 70 CM</div>',
                anchor: 'center center'
            }
        ],
        walkMarkers: []
    },
    'empire-b': {
        title: '帝國宴會廳',
        roomName: '帝國B廳', 
        thumb: './assets/images/empire/b/thumb.jpg',
        image: './assets/images/empire/b/pano.jpg', 
        defaultYaw: 0,
        defaultPitch: 0,
        styleImage: './assets/images/ui/sphere-test.jpg', 
        measurements: [
            {
                id: 'measure-height-line-fake',
                polyline: [ [1.0, -0.2], [1.0, 0.5] ],
                svgStyle: { stroke: 'white', strokeWidth: '2px', strokeDasharray: '4' }
            },
            {
                id: 'measure-height-text-fake',
                position: { yaw: 1.0, pitch: 0.15 },
                html: '<div class="measurement-marker">樓高 3 M</div>',
                anchor: 'center left'
            },
            {
                id: 'measure-table-text-fake',
                position: { yaw: 0, pitch: -0.2 },
                html: '<div class="measurement-marker">桌子 180x60 CM<br>高 70 CM</div>',
                anchor: 'center center'
            }
        ],
        walkMarkers: []
    },
    'empire-c': {
        title: '帝國宴會廳',
        roomName: '帝國C廳', 
        thumb: './assets/images/empire/c/thumb.jpg',
        image: './assets/images/empire/c/pano.jpg', 
        defaultYaw: 0,
        defaultPitch: 0,
        styleImage: './assets/images/ui/sphere-test.jpg', 
        measurements: [
            {
                id: 'measure-height-line-fake',
                polyline: [ [1.0, -0.2], [1.0, 0.5] ],
                svgStyle: { stroke: 'white', strokeWidth: '2px', strokeDasharray: '4' }
            },
            {
                id: 'measure-height-text-fake',
                position: { yaw: 1.0, pitch: 0.15 },
                html: '<div class="measurement-marker">樓高 3 M</div>',
                anchor: 'center left'
            },
            {
                id: 'measure-table-text-fake',
                position: { yaw: 0, pitch: -0.2 },
                html: '<div class="measurement-marker">桌子 180x60 CM<br>高 70 CM</div>',
                anchor: 'center center'
            }
        ],
        walkMarkers: []
    },
    'empire-d': {
        title: '帝國宴會廳',
        roomName: '帝國D廳', 
        thumb: './assets/images/empire/d/thumb.jpg',
        image: './assets/images/empire/d/pano.jpg', 
        defaultYaw: 0,
        defaultPitch: 0,
        styleImage: './assets/images/ui/sphere-test.jpg', 
        measurements: [
            {
                id: 'measure-height-line-fake',
                polyline: [ [1.0, -0.2], [1.0, 0.5] ],
                svgStyle: { stroke: 'white', strokeWidth: '2px', strokeDasharray: '4' }
            },
            {
                id: 'measure-height-text-fake',
                position: { yaw: 1.0, pitch: 0.15 },
                html: '<div class="measurement-marker">樓高 3 M</div>',
                anchor: 'center left'
            },
            {
                id: 'measure-table-text-fake',
                position: { yaw: 0, pitch: -0.2 },
                html: '<div class="measurement-marker">桌子 180x60 CM<br>高 70 CM</div>',
                anchor: 'center center'
            }
        ],
        walkMarkers: []
    },
    'empire-all': {
        title: '帝國宴會廳',
        roomName: '帝國廳全開', 
        thumb: './assets/images/empire/all/thumb.jpg',
        image: './assets/images/empire/all/pano.jpg', 
        defaultYaw: 0,
        defaultPitch: 0,
        styleImage: './assets/images/ui/sphere-test.jpg', 
        measurements: [
            {
                id: 'measure-height-line-fake',
                polyline: [ [1.0, -0.2], [1.0, 0.5] ],
                svgStyle: { stroke: 'white', strokeWidth: '2px', strokeDasharray: '4' }
            },
            {
                id: 'measure-height-text-fake',
                position: { yaw: 1.0, pitch: 0.15 },
                html: '<div class="measurement-marker">樓高 3 M</div>',
                anchor: 'center left'
            },
            {
                id: 'measure-table-text-fake',
                position: { yaw: 0, pitch: -0.2 },
                html: '<div class="measurement-marker">桌子 180x60 CM<br>高 70 CM</div>',
                anchor: 'center center'
            }
        ],
        walkMarkers: []
    },
    'vip-dragon': {
        title: 'VIP包廂',
        roomName: '龍廳', 
        thumb: './assets/images/vip/dragon/thumb.jpg',
        image: './assets/images/vip/dragon/pano.jpg', 
        defaultYaw: 0,
        defaultPitch: 0,
        styleImage: './assets/images/ui/sphere-test.jpg', 
        measurements: [
            {
                id: 'measure-height-line-fake',
                polyline: [ [1.0, -0.2], [1.0, 0.5] ],
                svgStyle: { stroke: 'white', strokeWidth: '2px', strokeDasharray: '4' }
            },
            {
                id: 'measure-height-text-fake',
                position: { yaw: 1.0, pitch: 0.15 },
                html: '<div class="measurement-marker">樓高 3 M</div>',
                anchor: 'center left'
            },
            {
                id: 'measure-table-text-fake',
                position: { yaw: 0, pitch: -0.2 },
                html: '<div class="measurement-marker">桌子 180x60 CM<br>高 70 CM</div>',
                anchor: 'center center'
            }
        ],
        walkMarkers: []
    },
    'vip-teng': {
        title: 'VIP包廂',
        roomName: '騰廳', 
        thumb: './assets/images/vip/teng/thumb.jpg',
        image: './assets/images/vip/teng/pano.jpg', 
        defaultYaw: 0,
        defaultPitch: 0,
        styleImage: './assets/images/ui/sphere-test.jpg', 
        measurements: [
            {
                id: 'measure-height-line-fake',
                polyline: [ [1.0, -0.2], [1.0, 0.5] ],
                svgStyle: { stroke: 'white', strokeWidth: '2px', strokeDasharray: '4' }
            },
            {
                id: 'measure-height-text-fake',
                position: { yaw: 1.0, pitch: 0.15 },
                html: '<div class="measurement-marker">樓高 3 M</div>',
                anchor: 'center left'
            },
            {
                id: 'measure-table-text-fake',
                position: { yaw: 0, pitch: -0.2 },
                html: '<div class="measurement-marker">桌子 180x60 CM<br>高 70 CM</div>',
                anchor: 'center center'
            }
        ],
        walkMarkers: []
    },
    'vip-fish': {
        title: 'VIP包廂',
        roomName: '魚廳', 
        thumb: './assets/images/vip/fish/thumb.jpg',
        image: './assets/images/vip/fish/pano.jpg', 
        defaultYaw: 0,
        defaultPitch: 0,
        styleImage: './assets/images/ui/sphere-test.jpg', 
        measurements: [
            {
                id: 'measure-height-line-fake',
                polyline: [ [1.0, -0.2], [1.0, 0.5] ],
                svgStyle: { stroke: 'white', strokeWidth: '2px', strokeDasharray: '4' }
            },
            {
                id: 'measure-height-text-fake',
                position: { yaw: 1.0, pitch: 0.15 },
                html: '<div class="measurement-marker">樓高 3 M</div>',
                anchor: 'center left'
            },
            {
                id: 'measure-table-text-fake',
                position: { yaw: 0, pitch: -0.2 },
                html: '<div class="measurement-marker">桌子 180x60 CM<br>高 70 CM</div>',
                anchor: 'center center'
            }
        ],
        walkMarkers: []
    },
    'vip-yue': {
        title: 'VIP包廂',
        roomName: '躍廳', 
        thumb: './assets/images/vip/yue/thumb.jpg',
        image: './assets/images/vip/yue/pano.jpg', 
        defaultYaw: 0,
        defaultPitch: 0,
        styleImage: './assets/images/ui/sphere-test.jpg', 
        measurements: [
            {
                id: 'measure-height-line-fake',
                polyline: [ [1.0, -0.2], [1.0, 0.5] ],
                svgStyle: { stroke: 'white', strokeWidth: '2px', strokeDasharray: '4' }
            },
            {
                id: 'measure-height-text-fake',
                position: { yaw: 1.0, pitch: 0.15 },
                html: '<div class="measurement-marker">樓高 3 M</div>',
                anchor: 'center left'
            },
            {
                id: 'measure-table-text-fake',
                position: { yaw: 0, pitch: -0.2 },
                html: '<div class="measurement-marker">桌子 180x60 CM<br>高 70 CM</div>',
                anchor: 'center center'
            }
        ],
        walkMarkers: []
    },
    'vip-gold': {
        title: 'VIP包廂',
        roomName: '金廳', 
        thumb: './assets/images/vip/gold/thumb.jpg',
        image: './assets/images/vip/gold/pano.jpg', 
        defaultYaw: 0,
        defaultPitch: 0,
        styleImage: './assets/images/ui/sphere-test.jpg', 
        measurements: [
            {
                id: 'measure-height-line-fake',
                polyline: [ [1.0, -0.2], [1.0, 0.5] ],
                svgStyle: { stroke: 'white', strokeWidth: '2px', strokeDasharray: '4' }
            },
            {
                id: 'measure-height-text-fake',
                position: { yaw: 1.0, pitch: 0.15 },
                html: '<div class="measurement-marker">樓高 3 M</div>',
                anchor: 'center left'
            },
            {
                id: 'measure-table-text-fake',
                position: { yaw: 0, pitch: -0.2 },
                html: '<div class="measurement-marker">桌子 180x60 CM<br>高 70 CM</div>',
                anchor: 'center center'
            }
        ],
        walkMarkers: []
    },
    'vip-bi': {
        title: 'VIP包廂',
        roomName: '壁廳', 
        thumb: './assets/images/vip/bi/thumb.jpg',
        image: './assets/images/vip/bi/pano.jpg', 
        defaultYaw: 0,
        defaultPitch: 0,
        styleImage: './assets/images/ui/sphere-test.jpg', 
        measurements: [
            {
                id: 'measure-height-line-fake',
                polyline: [ [1.0, -0.2], [1.0, 0.5] ],
                svgStyle: { stroke: 'white', strokeWidth: '2px', strokeDasharray: '4' }
            },
            {
                id: 'measure-height-text-fake',
                position: { yaw: 1.0, pitch: 0.15 },
                html: '<div class="measurement-marker">樓高 3 M</div>',
                anchor: 'center left'
            },
            {
                id: 'measure-table-text-fake',
                position: { yaw: 0, pitch: -0.2 },
                html: '<div class="measurement-marker">桌子 180x60 CM<br>高 70 CM</div>',
                anchor: 'center center'
            }
        ],
        walkMarkers: []
    },
    'vip-man': {
        title: 'VIP包廂',
        roomName: '滿廳', 
        thumb: './assets/images/vip/man/thumb.jpg',
        image: './assets/images/vip/man/pano.jpg', 
        defaultYaw: 0,
        defaultPitch: 0,
        styleImage: './assets/images/ui/sphere-test.jpg', 
        measurements: [
            {
                id: 'measure-height-line-fake',
                polyline: [ [1.0, -0.2], [1.0, 0.5] ],
                svgStyle: { stroke: 'white', strokeWidth: '2px', strokeDasharray: '4' }
            },
            {
                id: 'measure-height-text-fake',
                position: { yaw: 1.0, pitch: 0.15 },
                html: '<div class="measurement-marker">樓高 3 M</div>',
                anchor: 'center left'
            },
            {
                id: 'measure-table-text-fake',
                position: { yaw: 0, pitch: -0.2 },
                html: '<div class="measurement-marker">桌子 180x60 CM<br>高 70 CM</div>',
                anchor: 'center center'
            }
        ],
        walkMarkers: []
    },
    'vip-tang': {
        title: 'VIP包廂',
        roomName: '堂廳', 
        thumb: './assets/images/vip/tang/thumb.jpg',
        image: './assets/images/vip/tang/pano.jpg', 
        defaultYaw: 0,
        defaultPitch: 0,
        styleImage: './assets/images/ui/sphere-test.jpg', 
        measurements: [
            {
                id: 'measure-height-line-fake',
                polyline: [ [1.0, -0.2], [1.0, 0.5] ],
                svgStyle: { stroke: 'white', strokeWidth: '2px', strokeDasharray: '4' }
            },
            {
                id: 'measure-height-text-fake',
                position: { yaw: 1.0, pitch: 0.15 },
                html: '<div class="measurement-marker">樓高 3 M</div>',
                anchor: 'center left'
            },
            {
                id: 'measure-table-text-fake',
                position: { yaw: 0, pitch: -0.2 },
                html: '<div class="measurement-marker">桌子 180x60 CM<br>高 70 CM</div>',
                anchor: 'center center'
            }
        ],
        walkMarkers: []
    }
};

let viewer;
let markersPlugin;
let currentStyle = 'normal';
let isRulerActive = false;
let currentRoomId = 'hall-a';


function getRoomIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const room = params.get('room') || 'hall-a';
    
    // Auto-detect category
    for (const [cat, data] of Object.entries(categoriesData)) {
        if (data.rooms.includes(room)) {
            currentCategory = cat;
            break;
        }
    }
    return room;
}


async function initViewer() {
    currentRoomId = getRoomIdFromUrl();
    const room = roomsData[currentRoomId] || roomsData['hall-a'];

    
    document.getElementById('current-room-name').textContent = room.roomName;
    document.querySelector('.minimap-title').textContent = room.roomName;

    
    // Category Tabs Logic
    const categoryBtns = document.querySelectorAll('.category-btn');
    const basicInfoLink = document.getElementById('basic-info-link');
    
    function switchCategory(cat) {
        currentCategory = cat;
        // Update tabs active state
        categoryBtns.forEach(btn => {
            if (btn.dataset.category === cat) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Update basic info link
        if (categoriesData[cat]) {
            basicInfoLink.href = categoriesData[cat].link;
            
            // Always re-render the lists for the new category
            renderRoomLists();
            
            // Switch to the first room of this category
            const firstRoomKey = categoriesData[cat].rooms[0];
            if (firstRoomKey && firstRoomKey !== currentRoomId) {
                switchRoom(firstRoomKey);
            }
        }
    }
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            switchCategory(btn.dataset.category);
        });
    });
    
    // Initial sync
    switchCategory(currentCategory);

    try {
        viewer = new Viewer({
            container: document.querySelector('#viewer'),
            panorama: room.image,
            loadingImg: '', 
            touchmoveTwoFingers: true, 
            mousewheelCtrlKey: true,   
            defaultYaw: room.defaultYaw || 0,
            defaultPitch: room.defaultPitch || 0,
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
            lang: {
                zoom: '縮放',
                zoomOut: '縮小',
                zoomIn: '放大',
                ctrlZoom: '請使用 Ctrl + 滾輪縮放圖片',
                twoFingers: '請使用雙指縮放與移動',
                loadError: '圖片載入失敗',
            },
            navbar: false, 
        });

        markersPlugin = viewer.getPlugin(MarkersPlugin);
        
        // Listen for marker clicks for walking
        markersPlugin.addEventListener('select-marker', (e) => {
            const marker = e.marker || (e.args && e.args[0]) || e;
            if (marker && marker.data && marker.data.targetRoom) {
                switchRoom(marker.data.targetRoom);
            }
        });

        viewer.addEventListener('ready', () => {
            const loader = document.getElementById('loader');
            loader.classList.add('hidden');
            setTimeout(() => { loader.style.display = 'none'; }, 800);
            
            // Set initial UI texts correctly based on the data
            
            document.getElementById('current-room-name').textContent = room.roomName;
            document.querySelector('.minimap-title').textContent = room.roomName;
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
            if (markersPlugin.getMarker(m.id)) {
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

    // Render lists based on current category
    renderRoomLists();

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
        minimapImg.src = './assets/images/ui/gallery-placeholder.jpg';
    });

    btn3d.addEventListener('click', () => {
        btn3d.classList.add('active');
        btn2d.classList.remove('active');
        minimapImg.src = 'https://static.wixstatic.com/media/e869f9_4bfe6978066643eba30a5cebd27fb601~mv2.png';
    });

    // 1.5 Map Enlarge Modal Logic (Refactored)
    const btnExpandMap = document.querySelector('.minimap-expand');
    const mapModal = document.getElementById('map-modal');
    const btnCloseMap = document.getElementById('btn-close-map');
    const largeMapImg = document.getElementById('large-map-img');
    const mapModalTitle = document.getElementById('map-modal-title');
    const modalBtn2d = document.getElementById('modal-btn-2d');
    const modalBtn3d = document.getElementById('modal-btn-3d');

    const image2d = './assets/images/ui/gallery-placeholder.jpg';
    const image3d = 'https://static.wixstatic.com/media/e869f9_4bfe6978066643eba30a5cebd27fb601~mv2.png';

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
                    }, 15000); // Switch every 15 seconds
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

    // Turn off ruler if active
    if (isRulerActive) {
        const rulerBtn = Array.from(document.querySelectorAll('.action-btn')).find(b => b.textContent.includes('量尺'));
        if (rulerBtn) rulerBtn.click();
    }

    // Hide gallery
    document.getElementById('gallery-popup').classList.remove('active');

    // Update UI Texts
    
    document.getElementById('current-room-name').textContent = room.roomName;
    document.querySelector('.minimap-title').textContent = room.roomName;

    // Update active state in gallery
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.classList.remove('active');
        if (item.querySelector('.gallery-item-label').textContent === room.roomName) {
            item.classList.add('active');
        }
    });

    // Update active state in left scene menu
    document.querySelectorAll('.left-scene-btn').forEach(item => {
        item.classList.remove('active');
        if (item.textContent.includes(room.roomName)) {
            item.classList.add('active');
        }
    });

    // Show loader and set new panorama
    const loader = document.getElementById('loader');
    loader.style.display = 'flex';
    loader.classList.remove('hidden');

    viewer.setPanorama(room.image, { 
        transition: 500,
        position: { yaw: room.defaultYaw || 0, pitch: room.defaultPitch || 0 },
        showLoader: false 
    }).then(() => {
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

function renderRoomLists() {
    const galleryScrollContainer = document.getElementById('gallery-scroll-container');
    const leftSceneMenu = document.getElementById('left-scene-menu');
    
    if (galleryScrollContainer) galleryScrollContainer.innerHTML = '';
    if (leftSceneMenu) leftSceneMenu.innerHTML = '';
    
    const catData = categoriesData[currentCategory];
    if (!catData) return;
    
    catData.rooms.forEach(key => {
        const r = roomsData[key];
        if (!r) return;
        
        // Gallery Item
        if (galleryScrollContainer) {
            const item = document.createElement('div');
            item.className = 'gallery-item' + (key === currentRoomId ? ' active' : '');
            item.innerHTML = `<img src="${r.thumb}" alt="${r.roomName}"><div class="gallery-item-label">${r.roomName}</div>`;
            item.addEventListener('click', () => { switchRoom(key); });
            galleryScrollContainer.appendChild(item);
        }

        // Left Scene Menu Item
        if (leftSceneMenu) {
            const leftItem = document.createElement('button');
            leftItem.className = 'left-scene-btn' + (key === currentRoomId ? ' active' : '');
            leftItem.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${r.roomName}`;
            leftItem.addEventListener('click', () => { switchRoom(key); });
            leftSceneMenu.appendChild(leftItem);
        }
    });
}
