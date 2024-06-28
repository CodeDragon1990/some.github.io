// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const cardsContainer = document.querySelector('.cards-container');
    const peopleCount = document.getElementById('people-count');
    const feedbackBtn = document.getElementById('feedback-btn');

    // 硬编码一些flag数据
    const flags = [
        { id: 1, title: 'Flag 1', description: '这是一个未完成的flag', githubLink: 'https://github.com/flag1' },
        { id: 2, title: 'Flag 2', description: '这是另一个未完成的flag', githubLink: 'https://github.com/flag2' },
        // 可以继续添加更多的flag
    ];

    // 动态创建卡片
    flags.forEach(flag => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-title">${flag.title}</div>
            <div class="card-description">${flag.description}</div>
            <a href="${flag.githubLink}" target="_blank" class="card-button">查看GitHub</a>
            <button class="urgency-btn" data-flag-id="${flag.id}">催更</button>
        `;
        cardsContainer.appendChild(card);
    });

    // 增加人数的函数
    function increasePeopleCount() {
        let currentCount = parseInt(peopleCount.textContent);
        peopleCount.textContent = currentCount + 1;
    }

    // 绑定点击事件到每个催更按钮
    const urgencyButtons = document.querySelectorAll('.urgency-btn');
    urgencyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const flagId = this.getAttribute('data-flag-id');
            // 检查localStorage中是否已经记录了这个flag的点击
            if (!localStorage.getItem(`flag-${flagId}`)) {
                localStorage.setItem(`flag-${flagId}`, 'clicked');
                increasePeopleCount();
            }
        });
    });
});