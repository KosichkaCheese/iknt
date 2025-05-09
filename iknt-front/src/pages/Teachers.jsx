import TeacherCard from '../components/TeacherCard'

const teachers = [
    { id: 1, name: 'Иванов Иван Иванович', title: 'д.ф.-м.н., профессор', email: 'ivanov@fakultet.ru' },
    { id: 2, name: 'Петрова Мария Сергеевна', title: 'к.т.н., доцент', email: 'petrova@fakultet.ru' },
    { id: 3, name: 'Сидоров Алексей Николаевич', title: 'ассистент', email: 'sidorov@fakultet.ru' }
]

export default function Teachers() {
    return (
        <div>
            <h1>Преподаватели</h1>
            {teachers.map(teacher => <TeacherCard key={teacher.id} teacher={teacher} />)}
        </div>
    )
}