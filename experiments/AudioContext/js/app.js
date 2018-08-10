AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();

const sliderFreq = document.getElementById('slideFreq');
const btnControl = document.getElementById('btnControl');
const txtFreq = document.getElementById('txtFreq');
const waveType = document.getElementsByName('radioWaveType');
const soundType = document.getElementById('formControl');
const osc = context.createOscillator();

osc.frequency.value = sliderFreq.value;
osc.start(0);
connected = false;

for (let i = 0; i < waveType.length; i++) {
    waveType[i].addEventListener('click', updateType);
}

btnControl.onclick = () => {
    if (!connected) {
        osc.connect(context.destination);
        btnControl.value = "🔈";
    } else {
        btnControl.value = "🔉";
        osc.disconnect();
    }
    connected = !connected;
};


sliderFreq.oninput = () => {
    osc.frequency.value = sliderFreq.value;
    txtFreq.innerHTML = `Frequency:${sliderFreq.value}`;
}

function updateType() {
    for (let i = 0; i < soundType.length; i++) {
        if (soundType[i].checked) {
            osc.type = soundType[i].value;
        }
    }
}
