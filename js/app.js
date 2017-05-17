$(document).foundation()

const megaroster = {
    students: [],

    init(listSelector) {        
        this.studentList = document.querySelector(listSelector)
        this.max = 0
        document
            .querySelector('#new-student')
            .addEventListener('submit', this.addStudent.bind(this))
    },

    addStudent(ev) {
        ev.preventDefault()
        const form = ev.target
        const student = {
            id: this.max + 1,
            name: form.studentName.value,
        }
        this.students.unshift(student)
        const listItem = this.buildListItem(student)
        this.prependChild(this.studentList, listItem)
        this.max++
        form.reset()
    },

    prependChild(parent, child){
        parent.insertBefore(child, parent.firstChild)
    },

    buildListItem(student) {
        const template = document.querySelector('.student.template')
        const li = template.cloneNode(true)
        this.removeClassName(li, 'template')
        li.querySelector('.student-name').textContent = student.name
        li.dataset.id = student.id
        return li
    },

    removeClassName(el, className){
        el.className = el.className.replace(className, '').trim()
    },
}
megaroster.init('#studentList')