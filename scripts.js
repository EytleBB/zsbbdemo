// 获取存储的战术数据
let tactics = JSON.parse(localStorage.getItem('tactics')) || [];

// 显示添加战术按钮
const addTacticButton = document.getElementById('add-tactic-button');
if (addTacticButton) {
    addTacticButton.addEventListener('click', () => {
        window.location.href = 'add_tactic.html';
    });
}

// 显示所有战术按钮
const tacticButtonsDiv = document.getElementById('tactic-buttons');
if (tacticButtonsDiv) {
    tactics.forEach((tactic, index) => {
        const button = document.createElement('button');
        button.textContent = tactic.name;
        button.addEventListener('click', () => {
            alert(`战术名称: ${tactic.name}\n描述: ${tactic.description}\n细节: ${tactic.details}\n指挥话术: ${tactic.commands}\n备注: ${tactic.notes}`);
        });
        const editButton = document.createElement('button');
        editButton.textContent = '编辑';
        editButton.addEventListener('click', () => {
            // 实现编辑功能
        });
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '删除';
        deleteButton.addEventListener('click', () => {
            tactics.splice(index, 1);
            localStorage.setItem('tactics', JSON.stringify(tactics));
            window.location.reload();
        });
        tacticButtonsDiv.appendChild(button);
        tacticButtonsDiv.appendChild(editButton);
        tacticButtonsDiv.appendChild(deleteButton);
    });
}

// 处理添加战术表单提交
const tacticForm = document.getElementById('tactic-form');
if (tacticForm) {
    tacticForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('tactic-name').value;
        const description = document.getElementById('tactic-description').value;
        const details = document.getElementById('tactic-details').value;
        const commands = document.getElementById('tactic-commands').value;
        const notes = document.getElementById('tactic-notes').value;
        const newTactic = {
            name,
            description,
            details,
            commands,
            notes
        };
        tactics.push(newTactic);
        localStorage.setItem('tactics', JSON.stringify(tactics));
        window.location.href = 'index.html';
    });
}    