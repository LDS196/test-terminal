1.test-terminal-one.vercel.app

2.Задача на рефакторинг
function func(s, a, b) {
if (s.length === 0) {
return -1;
}

const aIndex = s.lastIndexOf(a);
const bIndex = s.lastIndexOf(b);

if (aIndex !== -1 && bIndex !== -1) {
return Math.max(aIndex, bIndex);
}

if (aIndex !== -1) {
return aIndex;
}

if (bIndex !== -1) {
return bIndex;
}

}

3.2) Web приложение - терминал оплаты мобильного телефона.
В приложении должен быть главный экран со списком операторов - МТС, Билайн,
Мегафон. Список должен быть расширяем. По клику на оператора переходить на
экран формы оплаты.
Экран с формой оплаты должен содержать выбранного оператора, поле ввода
телефона с маской и валидацией, и поле ввода суммы в рублях с маской и
валидацией (мин 1 и макс 1000 руб). Кнопка подтверждения, которая ожидает ответа
от сервера. После ответа показывается сообщение об успехе или об ошибке. В случае
успеха переходим на основной экран.

- Стэк: TypeScript, Next.js, React и React Hooks, Styled-Components.
- Обращение к API должны быть эмулированы. Ответы должны быть успешные
  или неуспешные в случайном порядке.
- Дизайн и верстка на ваше усмотрение, но сделайте красиво и добавьте
  анимации 💅
- При этом верстка должна быть адаптивной и поддерживать различные размеры
  экранов, включая мобильные.
- Исходный код должен быть выложен на Github.com.
- В репозитории должна быть ссылка на демо приложения.
