const secondColors = [
  "#ffffff",
  "#bfc4c9",
  "#d4efb2",
  "#f5d4ee"
];

const minuteColors = [
  "#e3c748",
  "#7bccb2",
  "#a798f3",
  "#ea6e5b"
];

const hourColors = [
  "#433702",
  "#630404",
  "#0e2381",
  "#04392c"
];

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

window.addEventListener("DOMContentLoaded", () => {
  document.documentElement.style.setProperty(
    "--second-color",
    pickRandom(secondColors)
  );

  document.documentElement.style.setProperty(
    "--minute-color",
    pickRandom(minuteColors)
  );

  document.documentElement.style.setProperty(
    "--hour-color",
    pickRandom(hourColors)
  );
});





const remainingTime = document.getElementById("remaining-time");
const clock = document.getElementById("clock");

function updateClock() {

  const now = new Date();

  // ----------------------------
  // 남은 시간 계산
  // ----------------------------

  const endOfDay = new Date();
  endOfDay.setHours(24, 0, 0, 0);

  const diff = endOfDay - now;

  const remainHours = Math.floor(diff / (1000 * 60 * 60));
  const remainMinutes = Math.floor((diff / (1000 * 60)) % 60);
  const remainSeconds = Math.floor((diff / 1000) % 60);

  remainingTime.innerText =
    `오늘 하루가 ${String(remainHours).padStart(2, '0')}시간 ` +
    `${String(remainMinutes).padStart(2, '0')}분 ` +
    `${String(remainSeconds).padStart(2, '0')}초 남았습니다.`;

  // ----------------------------
  // 현재 시각
  // ----------------------------

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // 기존 블록 제거
  clock.innerHTML = "";

  // ----------------------------
  // 파란 네모 (시간)
  // ----------------------------

  for (let i = 0; i < hours; i++) {

    const block = document.createElement("div");

    block.classList.add("block", "hour");

    // 가장 마지막 시간 블록에 숫자 표시
    if (i === hours - 1) {
      block.innerText = hours;
    }

    clock.appendChild(block);
  }

  // ----------------------------
  // 노란 네모 (분)
  // ----------------------------

  for (let i = 0; i < minutes; i++) {

    const block = document.createElement("div");

    block.classList.add("block", "minute");

    // 가장 마지막 분 블록에 숫자 표시
    if (i === minutes - 1) {
      block.innerText = minutes;
    }

    clock.appendChild(block);
  }

  // ----------------------------
  // 흰 네모 (초)
  // ----------------------------

  for (let i = 0; i < seconds; i++) {

    const block = document.createElement("div");

    block.classList.add("block", "second");

    // 가장 최근 초 블록에 숫자 표시
    if (i === seconds - 1) {
      block.innerText = seconds;
    }

    clock.appendChild(block);
  }
}

// 최초 실행
updateClock();

// 1초마다 갱신
setInterval(updateClock, 1000);