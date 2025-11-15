// Location data with CORRECTED Minoshima coordinates
const locations = {
  1: { name: "하카타 버스터미널", type: "transportation", lat: 33.5897, lng: 130.4206, description: "여행 시작점" },
  2: { name: "미노시마 숙소 (Residence Hotel Hakata Minoshima)", type: "accommodation", lat: 33.5773, lng: 130.4180, description: "하카타구 미노시마, 스미요시 지역", address: "Hakata-ku Minoshima 3-17-20, Fukuoka, 812-0017" },
  3: { name: "스미요시 신사", type: "attraction", lat: 33.5762, lng: 130.4185, description: "미노시마 숙소 근처, 일본 3대 스미요시 신사", rating: 4.0 },
  4: { name: "우동 타이라 (Udon Taira)", type: "restaurant", lat: 33.5768, lng: 130.4175, cuisine: "우동", price: "¥1,000", rating: 4.3 },
  5: { name: "하가쿠레 우동 (Hagakure Udon)", type: "restaurant", lat: 33.5755, lng: 130.4195, cuisine: "우동", price: "¥1,000", rating: 4.3 },
  6: { name: "라쿠스이엔 (Rakusuien Garden)", type: "attraction", lat: 33.5780, lng: 130.4160, description: "미노시마 근처 일본식 정원", rating: 4.0 },
  7: { name: "캐널시티 하카타", type: "shopping", lat: 33.5899, lng: 130.4100, description: "쇼핑몰, 식사, 분수쇼" },
  8: { name: "텐진중앙공원", type: "attraction", lat: 33.5902, lng: 130.4017, description: "도시 공원", rating: 4.2 },
  9: { name: "아카렌가 문화관", type: "attraction", lat: 33.5909, lng: 130.3983, description: "영국 스타일 건축물, 1909년 건설", rating: 4.1 },
  10: { name: "이치란 (캐널시티 점)", type: "restaurant", lat: 33.5897, lng: 130.4163, cuisine: "돈코츠 라멘", price: "¥1,000-2,000" },
  11: { name: "오호리 공원", type: "attraction", lat: 33.5929, lng: 130.3763, description: "후쿠오카 성터 활용 공원" },
  12: { name: "오호리 일본정원", type: "attraction", lat: 33.5899, lng: 130.3777, description: "후쿠오카 오아시스 정원", rating: 4.5 },
  13: { name: "후쿠오카시 미술관 / 카페 아쿠암", type: "attraction", lat: 33.5866, lng: 130.3773, description: "미술관과 카페" },
  14: { name: "모토무라 규카츠 (텐진)", type: "restaurant", lat: 33.5868, lng: 130.3986, cuisine: "규카츠", price: "$$", rating: 4.8 },
  15: { name: "스시쇼 (다이묘)", type: "restaurant", lat: 33.5866, lng: 130.3981, cuisine: "스시", price: "$$$$", rating: 4.5 },
  16: { name: "다자이후 텐만구", type: "attraction", lat: 33.5192, lng: 130.5340, description: "유명한 신사, 매화 박물관", rating: 4.4 },
  17: { name: "나카스 강변 야경", type: "attraction", lat: 33.5921, lng: 130.4070, description: "리버 크루즈 및 야경" },
  18: { name: "베이사이드 플레이스 하카타", type: "shopping", lat: 33.6046, lng: 130.4012, description: "항만 쇼핑센터" },
  19: { name: "후쿠오카 공항", type: "transportation", lat: 33.5859, lng: 130.4500, description: "여행 종료점" }
};

// Itinerary data
const itinerary = {
  day1: [
    { time: "10:00", title: "하카타 버스터미널 도착", locationId: 1, description: "여행 시작, 짐 보관" },
    { time: "10:30", title: "하카타역 인근 점심", locationId: 10, description: "이치란 또는 하카타식 라멘" },
    { time: "12:00", title: "캐널시티 하카타 탐방", locationId: 7, description: "분수쇼 관람, 쇼핑" },
    { time: "14:00", title: "텐진·아카렌가 지역 산책", locationId: 8, description: "도시 공원과 문화시설" },
    { time: "16:00", title: "미노시마 숙소로 이동", locationId: 2, description: "버스/도보로 약 15-20분" },
    { time: "18:30", title: "저녁: 스미요시 신사 주변 로컬 맛집", locationId: 4, description: "우동 타이라 또는 하가쿠레 우동 (미노시마 근처)" },
    { time: "20:00", title: "숙소 체크인 및 휴식", locationId: 2, description: "" }
  ],
  day2: [
    { time: "08:00", title: "아침 식사 및 출발", locationId: 2, description: "" },
    { time: "09:00", title: "오호리 공원 산책", locationId: 11, description: "공원 순환 트랙 (약 2km)" },
    { time: "10:30", title: "오호리 일본정원 방문", locationId: 12, description: "전통 정원과 운해 연출" },
    { time: "12:00", title: "점심: 카페 아쿠암", locationId: 13, description: "미술관 카페에서 호수 조망" },
    { time: "13:30", title: "텐진·다이묘 지역 이동", locationId: 14, description: "도시 미식 중심지" },
    { time: "14:00", title: "다이묘 산책 &amp; 미식 준비", locationId: 14, description: "규카츠 또는 스시 선택" },
    { time: "15:00", title: "선택 1: 다자이후 텐만구", locationId: 16, description: "도시 외곽의 신사와 정원 (1시간 소요)" },
    { time: "18:00", title: "저녁: 나카스 강변 체류", locationId: 17, description: "리버 크루즈 또는 강변 산책" },
    { time: "19:30", title: "저녁 식사: 베이사이드", locationId: 18, description: "야경 디너" }
  ],
  day3: [
    { time: "07:00", title: "아침 출발", locationId: 2, description: "숙소에서 공항으로 이동" },
    { time: "08:00", title: "후쿠오카 공항 도착", locationId: 19, description: "여행 종료" }
  ]
};

// Route waypoints
const routes = {
  day1: { color: '#3b82f6', waypoints: [1, 7, 8, 9, 2, 4, 5] },
  day2: { color: '#ef4444', waypoints: [2, 11, 12, 13, 14, 15, 17, 18] },
  day3: { color: '#22c55e', waypoints: [2, 19] }
};

// Icon mapping
const iconMap = {
  transportation: '🚌',
  accommodation: '🏨',
  restaurant: '🍽️',
  attraction: '⭐',
  shopping: '🛍️'
};

// Initialize map
let map;
let markers = [];
let polylines = [];

function initMap() {
  map = L.map('map').setView([33.5850, 130.4050], 13);
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);
  
  updateMap(1);
}

function clearMapOverlays() {
  markers.forEach(marker => map.removeLayer(marker));
  polylines.forEach(polyline => map.removeLayer(polyline));
  markers = [];
  polylines = [];
}

function updateMap(day) {
  clearMapOverlays();
  
  const routeKey = `day${day}`;
  const route = routes[routeKey];
  
  if (!route) return;
  
  // Add markers
  route.waypoints.forEach(locId => {
    const loc = locations[locId];
    if (loc) {
      const icon = L.divIcon({
        html: `<div style="background: ${route.color}; color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 18px; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">${iconMap[loc.type] || '📍'}</div>`,
        className: 'custom-marker',
        iconSize: [32, 32]
      });
      
      const marker = L.marker([loc.lat, loc.lng], { icon })
        .bindPopup(`<b>${loc.name}</b><br>${loc.description || ''}`);
      
      marker.addTo(map);
      markers.push(marker);
    }
  });
  
  // Add route polyline
  const coords = route.waypoints
    .map(locId => locations[locId])
    .filter(loc => loc)
    .map(loc => [loc.lat, loc.lng]);
  
  if (coords.length > 1) {
    const polyline = L.polyline(coords, {
      color: route.color,
      weight: 3,
      opacity: 0.7,
      dashArray: '10, 5'
    }).addTo(map);
    
    polylines.push(polyline);
  }
  
  // Fit bounds
  if (coords.length > 0) {
    const bounds = L.latLngBounds(coords);
    map.fitBounds(bounds, { padding: [50, 50] });
  }
}

function renderActivities(day) {
  const container = document.getElementById(`day${day}-activities`);
  const activities = itinerary[`day${day}`];
  
  container.innerHTML = activities.map(activity => {
    const loc = locations[activity.locationId];
    if (!loc) return '';
    
    return `
      <div class="activity-item" data-location="${activity.locationId}">
        <div class="activity-header">
          <div class="activity-icon">${iconMap[loc.type] || '📍'}</div>
          <div class="activity-content">
            <div class="activity-time">${activity.time}</div>
            <div class="activity-title">${activity.title}</div>
            <div class="activity-description">${activity.description}</div>
            <div class="activity-details">
              <div class="detail-row">
                <span class="detail-label">위치:</span>
                <span>${loc.name}</span>
              </div>
              ${loc.address ? `<div class="detail-row"><span class="detail-label">주소:</span><span>${loc.address}</span></div>` : ''}
              ${loc.cuisine ? `<div class="detail-row"><span class="detail-label">음식:</span><span>${loc.cuisine}</span></div>` : ''}
              ${loc.price ? `<div class="detail-row"><span class="detail-label">가격:</span><span>${loc.price}</span></div>` : ''}
              ${loc.rating ? `<div class="detail-row"><span class="detail-label">평점:</span><span>⭐ ${loc.rating}</span></div>` : ''}
              <div class="detail-row">
                <span class="detail-label">좌표:</span>
                <span>${loc.lat.toFixed(4)}, ${loc.lng.toFixed(4)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
  
  // Add click handlers
  container.querySelectorAll('.activity-item').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('expanded');
      
      const locationId = parseInt(item.dataset.location);
      const loc = locations[locationId];
      if (loc) {
        map.setView([loc.lat, loc.lng], 15);
        markers.find(m => {
          const pos = m.getLatLng();
          return pos.lat === loc.lat && pos.lng === loc.lng;
        })?.openPopup();
      }
    });
  });
}

// Tab switching
function setupTabs() {
  const tabs = document.querySelectorAll('.tab');
  const dayContents = document.querySelectorAll('.day-content');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const day = parseInt(tab.dataset.day);
      
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      dayContents.forEach(content => {
        content.classList.remove('active');
        if (parseInt(content.dataset.day) === day) {
          content.classList.add('active');
        }
      });
      
      updateMap(day);
    });
  });
}

// Initialize app
function init() {
  initMap();
  renderActivities(1);
  renderActivities(2);
  renderActivities(3);
  setupTabs();
}

// Start when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}