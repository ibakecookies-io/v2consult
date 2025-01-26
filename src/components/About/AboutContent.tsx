"use client";

import { useState } from "react";
import { v4 as uuid } from "uuid";
import TabPanel from "./TabPanel";

const tabButtons = [
  {
    id: uuid(),
    title: "Telegram-боты",
    value: "about",
  },
  {
    id: uuid(),
    title: "Mini Apps",
    value: "about0",
  },
  {
    id: uuid(),
    title: "ИТ-Аутсорсинг",
    value: "mission",
  },
  {
    id: uuid(),
    title: "CRM системы",
    value: "vision",
  },
  {
    id: uuid(),
    title: "Решение 1С",
    value: "about4",
  },
  {
    id: uuid(),
    title: "AI решениия",
    value: "about5",
  },
  {
    id: uuid(),
    title: "BI системы",
    value: "about6",
  }
];

export default function AboutContent() {
  const [activeTab, setActiveTab] = useState<string>(tabButtons[0].value);

  return (
    <>
      <div className="tabButtons flex w-full items-center justify-around">
        {tabButtons.map((tabButton) => (
          <button
            key={tabButton?.id}
            onClick={() => setActiveTab(tabButton?.value)}
            className={`w-full border-b px-2 pb-6 pt-8 font-heading text-base font-medium lg:pb-7 lg:pt-9 ${activeTab === tabButton?.value ? "border-primary text-primary dark:border-primary" : "hover:border-primary hover:text-primary dark:border-[#4B4E56] dark:text-white dark:hover:border-primary"}`}
          >
            {tabButton?.title}
          </button>
        ))}
      </div>
      <div className="w-full">
        {activeTab === "about" && (
          <TabPanel
            title="Telegram-боты и Mini Apps"
            title2 =""
            image1="/images/about/image-1.jpg"
            image1Alt="about image 1"
            image2="/images/about/image-2.jpg"
            image2Alt="about image 2"
          >
            <p className="mb-6 text-base text-dark-text">

            Это удобные и современные инструменты, которые позволяют клиентам взаимодействовать с бизнесом напрямую через привычный мессенджер            </p>

<p className="mb-6 text-base text-dark-text">

Разработка Telegram-бота, который позволяет клиентам самостоятельно записываться на услуги, выбирать мастера, дату и время. Бот интегрирован с CRM-системой (AmoCRM или Bitrix24) для синхронизации расписания и данных клиентов
            </p>

            <p className="mb-6 text-base text-dark-text">

Создание Telegram Mini App с каталогом блюд, корзиной, возможностью выбора способа доставки и оплаты. Интеграция с системой учета ресторана (например, 1С) для автоматической передачи заказов на кухню
            </p>

            <p className="mb-6 text-base text-dark-text">

Разработка Telegram-бота, который позволяет проводить опросы, собирать отзывы и предложения от клиентов в удобном формате. Бот может сегментировать аудиторию, задавать персонализированные вопросы и отправлять результаты опросов в CRM-систему
            </p>

            <p className="mb-6 text-base text-dark-text">

Создание Telegram-бота, который предоставляет сотрудникам доступ к базе знаний, помогает оформлять заявки на отпуск, информирует о корпоративных новостях и мероприятиях. Интеграция с внутренней системой кадрового учета

            </p>

            <p className="mb-6 text-base text-dark-text">

Разработка Telegram Mini App с учебными материалами (тексты, видео, тесты), системой проверки знаний и отслеживания прогресса. Возможность проведения онлайн-вебинаров и консультаций с преподавателями через Telegram
            </p>
          </TabPanel>
        )}

        {activeTab === "mission" && (
          <TabPanel
            title="Аутсорсинг IT-услуг
            Профессиональная команда для любых IT-задач."
            image1="/images/about/image-1.jpg"
            image1Alt="about image 1"
            image2="/images/about/image-2.jpg"
            image2Alt="about image 2"
            leftContent
          >
            <p className="mb-6 text-base text-dark-text">
            Бизнес- и системный анализ.
            </p>
            <p className="mb-6 text-base text-dark-text">
            Разработка корпоративных сервисов.
            </p>
            <p className="mb-6 text-base text-dark-text">
            Тестирование продуктов.
            </p>
            <p className="mb-6 text-base text-dark-text">
            DevOps и поддержка.
            </p>
            <p className="mb-6 text-base text-dark-text">
             Организация 1-й и 2-й линии поддержки.
            </p>
          </TabPanel>
        )}

        {activeTab === "vision" && (
          <TabPanel
            title="CRM-системы"
            image1="/images/about/image-1.jpg"
            image1Alt="about image 1"
            image2="/images/about/image-2.jpg"
            image2Alt="about image 2"
          >
            <p className="mb-6 text-base text-dark-text">
            Расширяем функционал вашей CRM под ваши уникальные задачи. Разработаем виджеты для автоматизации рутинных операций, интеграции со сторонними сервисами и повышения удобства работы.
            </p>
          </TabPanel>
        )}
 
        {activeTab === "about4" && (
          <TabPanel
            title="Разработка под 1C"
            image1="/images/about/image-1.jpg"
            image1Alt="about image 1"
            image2="/images/about/image-2.jpg"
            image2Alt="about image 2"
          >
            <p className="mb-6 text-base text-dark-text">
            Поможем выбрать правильную программу 1С: Не знаете, какая 1С вам нужна? Расскажите о своем бизнесе, и мы подберем оптимальный вариант, который подойдет именно вам по функционалу и цене.
            </p>
            <p className="mb-6 text-base text-dark-text">
            Установим и настроим 1С с нуля: Аккуратно установим программу на ваши компьютеры и настроим ее для работы, чтобы вы могли сразу начать ей пользоваться.
            </p>
            <p className="text-base text-dark-text">
            Перенесем данные из старых программ: Если вы пользовались другой программой учета, мы аккуратно перенесем все ваши данные (справочники, остатки, документы) в новую 1С, чтобы ничего не потерялось.
            </p>
          </TabPanel>
        )}


        {activeTab === "about5" && (
          <TabPanel
            title="AI решения"
            image1="/images/about/image-1.jpg"
            image1Alt="about image 1"
            image2="/images/about/image-2.jpg"
            image2Alt="about image 2"
          >
            <p className="mb-6 text-base text-dark-text">
            Современная система 'свой-чужой': мгновенный и безопасный доступ в помещения по распознаванию лиц.
            </p>
            <p className="mb-6 text-base text-dark-text">
            Исключите брак: точное сопоставление изображений и этикеток с эталоном.
            </p>
            <p className="text-base text-dark-text">
            Дефектоскопия для повышения качества вашей продукции на конвейерных линиях.
            </p>
            <p className="mb-6 text-base text-dark-text">
            Автоматическая фотометрия: точное определение размеров, зазоров и допусков по видео.
            </p>
            <p className="mb-6 text-base text-dark-text">
            Расширенные возможности мониторинга: распознавание объектов на фото и видео в реальном времени и в записи.
            </p>
            <p className="text-base text-dark-text">
            Интеллектуальная система трекинга персонала с отображением на карте и оповещением о нарушениях.
            </p>
            <p className="text-base text-dark-text">
            Безопасность превыше всего: автоматизированная проверка наличия СИЗ (каски, перчатки, форма и тд) на производстве.</p>
          </TabPanel>
        )}

{activeTab === "about6" && (
          <TabPanel
            title="BI системы"
            image1="/images/about/image-1.jpg"
            image1Alt="about image 1"
            image2="/images/about/image-2.jpg"
            image2Alt="about image 2"
          >
            <p className="mb-6 text-base text-dark-text">
            Интеграция BI-инструментов с различными источниками: базы данных, ERP-системы, файлы Excel, API внешних сервисов.
            Объединение разрозненных данных в единую аналитическую систему.
            </p>
            <p className="text-base text-dark-text">
            Создание интерактивных дашбордов с ключевыми показателями бизнеса (KPI).
            </p>
            <p className="mb-6 text-base text-dark-text">
            Очистка, нормализация и стандартизация данных для анализа.
            Автоматическая синхронизация данных в режиме реального времени.
            </p>
            <p className="mb-6 text-base text-dark-text">
            Визуализация данных в удобном формате: графики, таблицы, диаграммы, карты
            Настройка автоматической генерации отчетов по расписанию
            </p>
          </TabPanel>
        )}
      </div>
    </>
  );
}
