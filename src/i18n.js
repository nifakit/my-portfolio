import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: { about: "About", skills: "Skills", projects: "Projects", contact: "Contact" },
      hero: {
        title: "nifakit",
        subtitle: "Frontend Developer",
        desc: "Hi. I build clean, modern and responsive interfaces using React and Tailwind CSS. I am constantly improving my skills through personal projects and self-education.",
        btnProjects: "My Projects",
        btnContact: "Get in Touch",
      },
      about: {
        title: "About Me",
        text: "My name is Nikita (nifakit). I am a frontend developer with a solid foundation in building modern web interfaces. I completed my training at IT Step Academy, where I gained structured knowledge in web development. My primary stack includes React and Tailwind CSS. I have no commercial experience yet, but I actively apply my skills in personal projects, continuously improving my craft and exploring best practices in frontend development.",
        status: {
          available:     "Open to work",
          availableDesc: "Ready for job offers and collaboration",
          learning:      "Currently learning",
          focus:         "What I'm working on",
          focus1:        "Building personal projects to strengthen my skills",
          focus2:        "Deepening knowledge of React ecosystem",
          focus3:        "Exploring backend fundamentals and full-stack development",
        },
      },
      skills: {
        title: "Skills",
        frontend: "Frontend",
        backend: "Backend / Tools",
        level: { advanced: "Advanced", intermediate: "Intermediate", beginner: "Beginner" }
      },
      projects: {
        title: "Projects",
        subtitle: "No projects yet",
        coming: "But they're coming soon...",
        desc: "I am actively working on new projects right now. Stay tuned for updates!"
      },
      contact: {
        title: "Get in Touch",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message",
      },
    },
  },
  ru: {
    translation: {
      nav: { about: "Обо мне", skills: "Навыки", projects: "Проекты", contact: "Контакты" },
      hero: {
        title: "nifakit",
        subtitle: "Frontend-разработчик",
        desc: "Привет. Я создаю чистые, современные и адаптивные интерфейсы с использованием React и Tailwind CSS. Постоянно совершенствую навыки через личные проекты и самообучение.",
        btnProjects: "Мои проекты",
        btnContact: "Связаться",
      },
      about: {
        title: "Обо мне",
        text: "Меня зовут Никита (nifakit). Я frontend-разработчик с прочной базой в создании современных веб-интерфейсов. Прошёл обучение в IT Step Academy, где получил структурированные знания в области веб-разработки. Мой основной стек — React и Tailwind CSS. Коммерческого опыта пока нет, однако я активно применяю полученные знания в пет-проектах, постоянно совершенствуя навыки и изучая лучшие практики frontend-разработки.",
        status: {
          available:     "Открыт к предложениям",
          availableDesc: "Готов к работе и сотрудничеству",
          learning:      "Сейчас изучаю",
          focus:         "Над чем работаю",
          focus1:        "Создаю личные проекты для закрепления навыков",
          focus2:        "Углубляю знания экосистемы React",
          focus3:        "Изучаю основы backend и full-stack разработки",
        },
      },
      skills: {
        title: "Навыки",
        frontend: "Frontend",
        backend: "Backend / Инструменты",
        level: { advanced: "Продвинутый", intermediate: "Средний", beginner: "Начальный" }
      },
      projects: {
        title: "Проекты",
        subtitle: "Проектов пока нет",
        coming: "Но они уже скоро появятся...",
        desc: "Я активно работаю над новыми проектами прямо сейчас. Следите за обновлениями!"
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
        subtitle: "Frontend-розробник",
        desc: "Привіт. Я створюю чисті, сучасні та адаптивні інтерфейси з використанням React і Tailwind CSS. Постійно вдосконалюю навички через особисті проєкти та самонавчання.",
        btnProjects: "Мої проєкти",
        btnContact: "Зв'язатися",
      },
      about: {
        title: "Про мене",
        text: "Мене звуть Микита (nifakit). Я frontend-розробник із міцною базою у створенні сучасних веб-інтерфейсів. Пройшов навчання в IT Step Academy, де отримав структуровані знання у сфері веб-розробки. Мій основний стек — React і Tailwind CSS. Комерційного досвіду поки немає, проте я активно застосовую отримані знання в пет-проєктах, постійно вдосконалюючи навички та вивчаючи найкращі практики frontend-розробки.",
        status: {
          available:     "Відкритий до пропозицій",
          availableDesc: "Готовий до роботи та співпраці",
          learning:      "Зараз вивчаю",
          focus:         "Над чим працюю",
          focus1:        "Створюю особисті проєкти для закріплення навичок",
          focus2:        "Поглиблюю знання екосистеми React",
          focus3:        "Вивчаю основи backend і full-stack розробки",
        },
      },
      skills: {
        title: "Навички",
        frontend: "Frontend",
        backend: "Backend / Інструменти",
        level: { advanced: "Просунутий", intermediate: "Середній", beginner: "Початковий" }
      },
      projects: {
        title: "Проєкти",
        subtitle: "Проєктів поки немає",
        coming: "Але вони вже скоро з'являться...",
        desc: "Я активно працюю над новими проєктами прямо зараз. Слідкуйте за оновленнями!"
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