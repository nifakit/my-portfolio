import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: { about: "About", skills: "Skills", projects: "Projects", contact: "Contact" },
      hero: {
        title: "nifakit",
        subtitle: "Aspiring frontend developer",
        desc: "Hi. I'm learning to create clean and modern interfaces with React and Tailwind CSS. Currently working on pet projects and continuing to grow.",
        btnProjects: "My projects",
        btnContact: "Get in touch",
      },
      about: {
        title: "About me",
        text: "My name is Nikita (nifakit). I'm a beginner frontend developer. I enjoy creating clean and modern interfaces with React and Tailwind CSS. I have no commercial experience yet, but I regularly work on pet projects and keep learning."
      },
      skills: {
        title: "Skills",
        frontend: "Frontend",
        backend: "Backend / Tools",
        level: { advanced: "Advanced", intermediate: "Intermediate", beginner: "Beginner" }
      },
      projects: {
        title: "Pet Projects",
        subtitle: "No projects yet",
        coming: "But they are coming soon...",
        desc: "I'm actively working on new projects right now. Stay tuned!"
      },
      contact: {
        title: "Get in touch",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send",
      },
    },
  },
  ru: {
    translation: {
      nav: { about: "Обо мне", skills: "Навыки", projects: "Проекты", contact: "Контакты" },
      hero: {
        title: "nifakit",
        subtitle: "Начинающий frontend-разработчик",
        desc: "Привет. Я учусь создавать чистые и современные интерфейсы с React и Tailwind CSS. Сейчас делаю пет-проекты и продолжаю развиваться.",
        btnProjects: "Мои проекты",
        btnContact: "Связаться",
      },
      about: {
        title: "Обо мне",
        text: "Меня зовут Никита (nifakit). Я начинающий frontend-разработчик. Мне нравится создавать чистые и современные интерфейсы с React и Tailwind CSS. Коммерческого опыта пока нет, но я регулярно делаю пет-проекты и продолжаю учиться."
      },
      skills: {
        title: "Навыки",
        frontend: "Frontend",
        backend: "Backend / Инструменты",
        level: { advanced: "Продвинутый", intermediate: "Средний", beginner: "Начальный" }
      },
      projects: {
        title: "Пет-проекты",
        subtitle: "Пока нет проектов",
        coming: "Но они уже скоро появятся...",
        desc: "Я активно работаю над новыми проектами прямо сейчас. Следи за обновлениями!"
      },
      contact: {
        title: "Связаться",
        name: "Имя",
        email: "Email",
        message: "Сообщение",
        send: "Отправить",
      },
    },
  },
  ua: {
    translation: {
      nav: { about: "Про мене", skills: "Навички", projects: "Проєкти", contact: "Контакти" },
      hero: {
        title: "nifakit",
        subtitle: "Початківець frontend-розробник",
        desc: "Привіт. Я вчуся створювати чисті та сучасні інтерфейси з React і Tailwind CSS. Зараз роблю пет-проєкти і продовжую розвиватися.",
        btnProjects: "Мої проєкти",
        btnContact: "Зв'язатися",
      },
      about: {
        title: "Про мене",
        text: "Мене звуть Никита (nifakit). Я початківець frontend-розробник. Мені подобається створювати чисті та сучасні інтерфейси з React і Tailwind CSS. Комерційного досвіду поки немає, але я регулярно роблю пет-проєкти і продовжую вчитися."
      },
      skills: {
        title: "Навички",
        frontend: "Frontend",
        backend: "Backend / Інструменти",
        level: { advanced: "Просунутий", intermediate: "Середній", beginner: "Початковий" }
      },
      projects: {
        title: "Пет-проєкти",
        subtitle: "Поки немає проєктів",
        coming: "Але вони вже скоро з'являться...",
        desc: "Я активно працюю над новими проєктами прямо зараз. Слідкуй за оновленнями!"
      },
      contact: {
        title: "Зв'язатися",
        name: "Ім'я",
        email: "Email",
        message: "Повідомлення",
        send: "Надіслати",
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ru",
    fallbackLng: "ru",
    interpolation: { escapeValue: false },
  });

export default i18n;