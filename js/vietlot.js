// vietlot.js

function generateRandomNumbers() {
    let numbers = [];
    while (numbers.length < 6) {
        let num = Math.floor(Math.random() * 56);
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    return numbers;
}

function getPlayerNumbers() {
    let numbers = [];
    for (let i = 0; i < 6; i++) {
        let num = parseInt(prompt(`Nhập số thứ ${i + 1} (từ 0 đến 55):`));
        if (!isNaN(num) && num >= 0 && num <= 55) {
            numbers.push(num);
        } else {
            alert("Vui lòng nhập số hợp lệ từ 0 đến 55.");
            return null;
        }
    }
    return numbers;
}

function compareNumbers(playerNumbers, winningNumbers) {
    let matches = 0;
    for (let num of playerNumbers) {
        if (winningNumbers.includes(num)) {
            matches++;
        }
    }
    return matches;
}

function getPrize(matches) {
    switch (matches) {
        case 3: return "100K";
        case 4: return "1M";
        case 5: return "10M";
        case 6: return "Jackpot 10 tỷ";
        default: return "Không trúng giải";
    }
}

function playGame() {
    let playerNumbers = getPlayerNumbers();
    if (!playerNumbers) return;

    let winningNumbers = generateRandomNumbers();
    let matches = compareNumbers(playerNumbers, winningNumbers);

    let resultMessage = `
        Số của bạn: ${playerNumbers.join(", ")}\n
        Số trúng thưởng: ${winningNumbers.join(", ")}\n
        Bạn trúng được: ${getPrize(matches)}
    `;

    console.log(resultMessage);
    alert(resultMessage);
}

// Tự động chạy khi trang được tải
window.onload = playGame;
