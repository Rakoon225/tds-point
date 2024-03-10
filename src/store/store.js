import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            blocks: [
                {
                    title: 'Кто мы такие и чем занимаемся',
                    name: 'main',
                    id: 0,
                },
                {
                    title: 'Сайты',
                    description: 'Краткая информация. Здесь будет краткая информация.',
                    name: 'Web',
                    id: 1,
                    sub: [
                        {
                            title: 'Создание',
                            description: `Наши профессионалы создадут для вас современный и функциональный сайт, отвечающий вашим потребностям. Мы предлагаем индивидуальный подход к разработке сайтов любой сложности: от простых визиток до сложных интернет-порталов. Наша команда учитывает все ваши пожелания и следует последним тенденциям в веб-разработке, чтобы обеспечить вашему сайту эффективность, удобство использования и современный дизайн. С нами ваш онлайн-проект будет на высшем уровне!`,
                            src: '',
                            name: 'Web-create',
                            id: 0,
                            id_service: 1,
                            tabs: [
                                {
                                    title: "Откройте таб1",
                                    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Dignissimos, Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Dignissimos,
                                            voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod.
                                            voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod. voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Dignissimos,
                                            voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod.`,
                                    isShow: true,
                                    key: 123,
                                },
                                {
                                    title: "Откройте таб",
                                    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Dignissimos, Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Dignissimos,
                                            voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
                                    isShow: false,
                                    key: 321,
                                },
                                {
                                    title: "Откройте таб",
                                    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Dignissimos, voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Dignissimos,
                                            voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod.
                                            voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod. voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Dignissimos,`,
                                    isShow: false,
                                    key: 123465,
                                }
                            ],
                        },
                        {
                            title: 'Ведение',
                            description: `Наша команда готова взять на себя полное ведение вашего сайта, обеспечивая его непрерывную работу и эффективную поддержку. Мы предлагаем широкий спектр услуг, включая техническую поддержку, обновление контента, аналитику посещаемости, управление безопасностью и регулярное обслуживание. Мы понимаем, что ваш веб-проект - это лицо вашего бизнеса, поэтому мы гарантируем высокое качество обслуживания и оперативную реакцию на любые потребности вашего сайта. Доверьте нам заботу о вашем сайте, чтобы вы могли сосредоточиться на развитии вашего бизнеса.`,
                            src: '',
                            name: 'Web-conduction',
                            id: 1,
                            id_service: 1,
                            tabs: [
                                {
                                    title: "Откройте таб2",
                                    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Dignissimos, Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Dignissimos,
                                            voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod.
                                            voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod. voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Dignissimos,
                                            voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod.`,
                                    isShow: true,
                                    key: 123,
                                },
                                {
                                    title: "Откройте таб",
                                    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Dignissimos, Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Dignissimos,
                                            voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
                                    isShow: false,
                                    key: 321,
                                },
                                {
                                    title: "Откройте таб",
                                    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Dignissimos, voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Dignissimos,
                                            voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod.
                                            voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod. voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Dignissimos,`,
                                    isShow: false,
                                    key: 123465,
                                }
                            ],
                        },
                        {
                            title: 'Продвижение',
                            description: `Наши эксперты по маркетингу готовы помочь вашему бизнесу достичь максимальной видимости и привлечь целевую аудиторию. Мы предлагаем комплексный подход к продвижению, включая SEO-оптимизацию, контекстную рекламу,и другие стратегии, адаптированные под ваш бизнес. Наша цель - помочь вам увеличить трафик, конверсию и укрепить позиции вашего бренда в онлайн-среде. Мы работаем с вами над созданием эффективной стратегии, индивидуально подходящей под ваши потребности и цели, чтобы обеспечить максимальный результат в продвижении вашего бизнеса.`,
                            src: '',
                            name: 'Web-promotion',
                            id: 2,
                            id_service: 1,
                            tabs: [
                                {
                                    title: "Откройте таб",
                                    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Dignissimos, Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Dignissimos,
                                            voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod.
                                            voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod. voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Dignissimos,
                                            voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod.`,
                                    isShow: true,
                                    key: 123,
                                },
                                {
                                    title: "Откройте таб",
                                    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Dignissimos, Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Dignissimos,
                                            voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
                                    isShow: false,
                                    key: 321,
                                },
                                {
                                    title: "Откройте таб",
                                    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Dignissimos, voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Dignissimos,
                                            voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod.
                                            voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod. voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Dignissimos,`,
                                    isShow: false,
                                    key: 123465,
                                }
                            ],
                        },
                        {
                            title: 'Редизайн',
                            description: `Наша команда специалистов по веб-дизайну предлагает полный пересмотр вашего сайта для повышения его эстетики, удобства использования и эффективности. Мы проведем глубокий анализ текущего веб-проекта, обратив внимание на пользовательский опыт, визуальное восприятие и функциональность. Наши эксперты разработают новый дизайн, соответствующий современным тенденциям и вашим целям, сохраняя уникальность вашего бренда. Мы стремимся не только улучшить внешний вид, но и оптимизировать сайт для повышения конверсии и улучшения взаимодействия с посетителями. Доверьте нам обновление вашего сайта для достижения новых высот вашего бизнеса.`,
                            src: '',
                            name: 'Web-redesign',
                            id: 3,
                            id_service: 1,
                            tabs: [
                                {
                                    title: "Откройте таб",
                                    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Dignissimos, Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Dignissimos,
                                            voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod.
                                            voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod. voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Dignissimos,
                                            voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod.`,
                                    isShow: true,
                                    key: 123,
                                },
                                {
                                    title: "Откройте таб",
                                    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Dignissimos, Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Dignissimos,
                                            voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
                                    isShow: false,
                                    key: 321,
                                },
                                {
                                    title: "Откройте таб",
                                    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Dignissimos, voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Dignissimos,
                                            voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod.
                                            voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod. voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Dignissimos,`,
                                    isShow: false,
                                    key: 123465,
                                }
                            ],
                        },
                        {
                            title: 'Оптимизация',
                            description: `Наши специалисты по оптимизации готовы улучшить производительность вашего веб-сайта. Мы предлагаем комплексный подход к оптимизации сайтов, включая техническую оптимизацию, улучшение скорости загрузки, работу с контентом. Наша цель - сделать ваш сайт более функциональным, быстрым и отзывчивым, что приведет к улучшению пользовательского опыта и росту показателей эффективности. Мы обеспечим ваш сайт не только оптимизированным для поисковых систем, но и приятным и удобным для посетителей, что повысит шансы на привлечение новых клиентов и удержание существующей аудитории.`,
                            src: '',
                            name: 'Web-optimization',
                            id: 4,
                            id_service: 1,
                            tabs: [
                                {
                                    title: "Откройте таб",
                                    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Dignissimos, Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Dignissimos,
                                            voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod.
                                            voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod. voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Dignissimos,
                                            voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod.`,
                                    isShow: true,
                                    key: 123,
                                },
                                {
                                    title: "Откройте таб",
                                    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Dignissimos, Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Dignissimos,
                                            voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
                                    isShow: false,
                                    key: 321,
                                },
                                {
                                    title: "Откройте таб",
                                    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Dignissimos, voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Dignissimos,
                                            voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod.
                                            voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod. voluptatem! Nobis cum illum voluptatem, nostrum harum iste beatae, tempore distinctio cumque
                                            omnis ut non quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Dignissimos,`,
                                    isShow: false,
                                    key: 123465,
                                }
                            ],
                        }
                    ]
                },
                {
                    title: 'Видеосъёмка',
                    description: 'Краткая информация. Здесь будет краткая информация.',
                    name: 'Videography',
                    id: 2,
                    sub: [
                        {
                            title: 'Рекламные видео',
                            description: `Наша команда профессиональных видеографов готова помочь в создании качественных и запоминающихся рекламных видео роликов. Мы предлагаем полный спектр услуг, начиная от концепции и скриптов до съемки, монтажа и постпродакшн обработки. Независимо от того, нужен ли вам короткий рекламный ролик для социальных сетей или полноценная рекламная кампания, мы обеспечим высокое качество видео материалов, которые привлекут внимание вашей аудитории. Наша цель - передать ваше сообщение эффективно и эмоционально, создавая видео контент, который захватывает внимание и вызывает реакцию у зрителей. Доверьте нам создание рекламного видео, чтобы подчеркнуть уникальные черты вашего бренда и продуктов.`,
                            src: '',
                            name: 'Videography-add',
                            id: 0,
                            id_service: 2,
                        },
                        {
                            title: 'Обучающие видео',
                            description: `Наша команда специализируется на создании интерактивных и понятных обучающих видео материалов. Мы предлагаем полное сопровождение - от разработки контента и скриптов до съемки, монтажа и создания готового обучающего продукта. Независимо от темы - обучение продукту, инструкции по использованию или обучающий контент для платформ - мы создаем видео материалы, которые ясно и понятно передают информацию, делая обучение удобным и эффективным. Наша цель - предоставить вам высококачественный контент, который будет стимулировать и увлекать зрителей, обеспечивая легкость восприятия и запоминания материала. Доверьте нам создание обучающих видео для эффективного обучения вашей аудитории.`,
                            src: '',
                            name: 'Videography-training',
                            id: 1,
                            id_service: 2,
                        },
                        {
                            title: 'Съёмка интернет курсов',
                            description: `Наши видеографы и специалисты по производству контента предлагают профессиональную видеосъемку для создания интернет-курсов высокого качества. Мы работаем от разработки концепции и сценария до съемки, монтажа и производства готового курса. Наша команда способна превратить идеи в содержательный и увлекательный видеоконтент, который обучает, мотивирует и вдохновляет вашу аудиторию. Мы предлагаем индивидуальный подход к каждому проекту, обеспечивая высокую степень профессионализма и технического исполнения. Доверьте нам создание видео для вашего интернет-курса, чтобы представить ваше обучающее содержание в удобной и привлекательной форме.`,
                            src: '',
                            name: 'Videography-course',
                            id: 2,
                            id_service: 2,
                        },
                        {
                            title: 'Съёмка для социальных сетей',
                            description: `Мы специализируемся на создании увлекательного видео контента, идеально подходящего для социальных сетей. Независимо от того, нужен ли вам короткий ролик для Instagram, динамичное видео для TikTok или информативный контент для YouTube, мы обеспечим профессиональную видеосъемку, монтаж и адаптацию под требования платформы. Наша команда тщательно работает над созданием контента, который захватывает внимание вашей аудитории, стимулирует вовлеченность и расширяет охват. Доверьте нам создание видео для социальных сетей, чтобы укрепить присутствие вашего бренда и привлечь внимание вашей целевой аудитории в онлайн-мире.`,
                            src: '',
                            name: 'Videography-social',
                            id: 3,
                            id_service: 2,
                        },
                        {
                            title: 'Видео инструкции',
                            description: `Мы предоставляем услуги по созданию профессиональных видео инструкций, которые позволят вашим пользователям легко и понятно освоить нужные навыки по пользованию вашими продуктами. Наша команда экспертов разработает идеальную схему представления информации, проведет съемку, монтаж и создаст готовые видео инструкции. Мы стремимся создавать контент, который не только ясно демонстрирует процесс, но и стимулирует интерес и уверенность у зрителя в его возможностях. Доверьте нам создание видео инструкций для вашего продукта или сервиса, чтобы улучшить пользовательский опыт и повысить удовлетворенность вашей аудитории.`,
                            src: '',
                            name: 'Videography-instruction',
                            id: 4,
                            id_service: 2,
                        },
                        {
                            title: 'Съемка Интервью',
                            description: `Мы предоставляем услуги по видео съемке интервью, которые передадут вашу уникальную историю или точку зрения. Наши видеографы работают с вами, чтобы создать атмосферу доверия и комфорта во время интервью, что позволит вам передать ваше послание ясно и эмоционально. Мы стремимся запечатлеть не только слова, но и эмоции, передавая вашу историю в естественной и привлекательной форме. Доверьте нам создание видео интервью, которые будут увлекательными и вдохновляющими, передавая ваше сообщение или идеи с максимальной эффективностью и вовлеченностью аудитории.`,
                            src: '',
                            name: 'Videography-instruction',
                            id: 5,
                            id_service: 2,
                        }
                    ]
                },
                {
                    title: 'Услуги дизайнера',
                    description: 'Краткая информация. Здесь будет краткая информация.',
                    name: 'Design',
                    id: 3,
                    sub: [
                        {
                            title: 'Создание логотипа',
                            description: `Наша команда профессиональных дизайнеров предлагает услуги по созданию уникального логотипа, который отразит суть вашего бренда или компании. Мы работаем в тесном сотрудничестве с вами, чтобы понять вашу концепцию, ценности и желаемый имидж. Наша цель - разработать стильный, запоминающийся и привлекательный логотип, который будет отличительным знаком вашего бренда и привлечет внимание вашей аудитории. Доверьте нам создание логотипа, который станет неотъемлемой частью вашей корпоративной идентичности и поможет выделиться среди конкурентов.`,
                            src: '',
                            name: 'Design-logo',
                            id: 0,
                            id_service: 3,
                        },
                        {
                            title: 'Дизайн соц-сетей',
                            description: `Мы предлагаем профессиональный дизайн для социальных сетей, который поможет выделить ваш бренд среди конкурентов и привлечь внимание вашей аудитории. Наша команда дизайнеров разработает стильные и эффективные графические материалы - обложки, баннеры, посты, которые соответствуют вашей корпоративной идентичности и вызывают интерес вашей целевой аудитории. Мы учитываем последние тренды и особенности каждой платформы, чтобы создать контент, который будет не только эстетичным, но и эффективным в привлечении внимания и вовлечении подписчиков. Доверьте нам создание дизайна для социальных сетей, чтобы ваш бренд выделялся и оставался запоминающимся в онлайн-мире.`,
                            src: '',
                            name: 'Design-social',
                            id: 1,
                            id_service: 3,
                        },
                        {
                            title: 'Дизайн вашего продукта',
                            description: `Наши специалисты по дизайну предлагают услуги по созданию уникального дизайна для вашего продукта. Мы работаем с вами, чтобы понять вашу цель и ценности бренда, чтобы разработать дизайн, который отражает вашу концепцию и привлекает внимание вашей целевой аудитории. Независимо от того, нужен ли вам дизайн упаковки, макета продукта или UX/UI дизайн для цифровых продуктов, наша команда обеспечит высокий уровень качества и оригинальность в каждой детали. Доверьте нам создание дизайна вашего продукта, чтобы сделать его привлекательным, функциональным и уникальным на рынке.`,
                            src: '',
                            name: 'Design-product',
                            id: 2,
                            id_service: 3,
                        },
                        {
                            title: 'Дизайн флаеров, визиток и других брендированных элементов',
                            description: `Мы предлагаем услуги по дизайну различных материалов - от флаеров до визиток и других брендированных элементов. Наша команда профессиональных дизайнеров разработает стильные и запоминающиеся материалы, соответствующие вашей корпоративной идентичности. Мы учитываем ваши предпочтения и потребности вашего бизнеса, стремясь создать дизайн, который будет эффективным инструментом привлечения внимания и запоминания вашего бренда. Доверьте нам создание качественных и профессиональных материалов, чтобы выделиться среди конкурентов и оставаться в памяти вашей целевой аудитории.`,
                            src: '',
                            name: 'Design-paper',
                            id: 3,
                            id_service: 3,
                        },
                        {
                            title: 'Дизайн уличных баннеров',
                            description: `Мы специализируемся на создании внушительных уличных баннеров, которые будут привлекать внимание прохожих и эффективно рекламировать ваш бренд или продукт. Наши дизайнеры разработают яркие, информативные и запоминающиеся баннеры, соответствующие вашим целям и идентичности бренда. Мы учитываем особенности места размещения и требования к графическому материалу для уличной рекламы, чтобы создать максимально привлекательный и четкий дизайн. Доверьте нам создание уличных баннеров, чтобы ваше объявление выделялось среди других и привлекало внимание вашей целевой аудитории.`,
                            src: '',
                            name: 'Design-banner',
                            id: 4,
                            id_service: 3,
                        }
                    ]
                },
                {
                    title: 'Рекламные услуги',
                    description: 'Краткая информация. Здесь будет краткая информация.',
                    name: 'Add',
                    id: 4,
                    sub: [
                        {
                            title: 'Таргетированная реклама',
                            description: `Наши услуги по таргетированной рекламе помогут вам донести ваше сообщение до правильной аудитории в самый подходящий момент. Мы предлагаем комплексный подход к настройке таргетированных рекламных кампаний, используя передовые инструменты и аналитику, чтобы точно определить вашу целевую аудиторию. Мы учитываем интересы, поведение и предпочтения пользователей, создавая рекламные объявления, которые будут максимально релевантны и привлекательны для вашей аудитории. Доверьте нам оптимизацию вашей таргетированной рекламы, чтобы увеличить конверсию, повысить эффективность кампаний и увеличить вашу онлайн-видимость.`,
                            src: '',
                            name: 'Add-target',
                            id: 0,
                            id_service: 4,
                        },
                        {
                            title: 'Контектсная реклама',
                            description: `Наши услуги контекстной рекламы помогут вашему бренду или продукту появиться перед потенциальными клиентами в самый подходящий момент. Мы создаем рекламные объявления, точно соответствующие контексту поисковых запросов или содержанию веб-страниц, чтобы привлечь внимание целевой аудитории. Наша команда специалистов проводит анализ ключевых слов, составляет релевантные объявления и оптимизирует кампании для максимальной эффективности. Доверьте нам контекстную рекламу, чтобы увеличить трафик, повысить узнаваемость вашего бренда и привлечь пользователей, заинтересованных в вашем продукте или услуге.`,
                            src: '',
                            name: 'Add-context',
                            id: 1,
                            id_service: 4,
                        },
                        {
                            title: 'Реклама в картах и навигаторах',
                            description: `Наши услуги по рекламе в картах и навигационных системах помогут вашему бизнесу быть заметным для пользователей в момент, когда они ищут подобные услуги или товары. Мы предлагаем эффективные решения для размещения вашей рекламы на платформах карт и навигаторов, чтобы обеспечить максимальное внимание к вашему бренду или предложению. Наша команда оптимизирует и настраивает рекламные кампании, чтобы ваше объявление показывалось в нужное время и в нужном месте, увеличивая шансы на привлечение новых клиентов. Доверьте нам размещение рекламы в картах и навигационных приложениях, чтобы увеличить видимость вашего бизнеса и привлечь целевую аудиторию.`,
                            src: '',
                            name: 'Add-map',
                            id: 2,
                            id_service: 4,
                        }
                    ]
                },
                {
                    title: 'видео съёмки того что важно',
                    description: 'Краткая информация. Здесь будет краткая информация.',
                    name: 'VideographyHoliday',
                    id: 5,
                    sub: [
                        {
                            title: 'Съемка Свадеб',
                            description: `Мы предлагаем профессиональную видеосъемку, которая запечатлеет ваши самые важные и трогательные моменты в день свадьбы. Наша команда видеографов и редакторов стремится создать уникальное видео, передающее атмосферу и эмоции вашего торжества. Мы работаем с вами, чтобы понять ваши пожелания и предпочтения, чтобы создать видеоролик, который будет отражать вашу историю любви. Мы захватываем те моменты, которые делают вашу свадьбу особенной, чтобы вы могли пережить эти моменты снова и снова через наше профессиональное видео. Доверьте нам создание видео, которое станет визуальной историей вашего особенного дня.`,
                            src: '',
                            name: 'Weddings',
                            id: 0,
                            id_service: 5,
                        },
                        {
                            title: 'Съемка Детских утренников',
                            description: `Мы специализируемся на создании незабываемых видео детских утренников. Наши видеографы улавливают каждый момент веселья, радости и творчества, создавая яркие и трогательные видео ролики. Мы стремимся запечатлеть эмоциональные выступления, улыбки и радость детей, делая особый акцент на моментах, которые станут важными для вас и вашего ребенка в будущем. Доверьте нам сохранение воспоминаний о детском утреннике - мы создадим видео, которое станет не только отражением творчества и игр детей, но и ценным архивом незабываемых моментов вашего ребенка на память.`,
                            src: '',
                            name: 'Childrens-matinees',
                            id: 1,
                            id_service: 5,
                        },
                        {
                            title: 'Съемка Дней рождений',
                            description: `Празднование Дня Рождения - это особый момент, и мы готовы запечатлеть каждую радостную минуту этого дня. Наши видеографы создадут яркое и эмоциональное видео, отражающее веселье, улыбки и особые моменты вашего праздника. Мы фиксируем те моменты счастья, волнения и радости, которые будут важными для вас и ваших гостей. Доверьте нам создание видеопамяти, которая сохранит воспоминания о ваших особых днях и поможет вам переживать эти радостные моменты вновь и вновь.`,
                            src: '',
                            name: 'Birthdays',
                            id: 2,
                            id_service: 5,
                        },
                        {
                            title: 'Съемка школьных линеек ',
                            description: `Мы специализируемся на создании запоминающихся видео роликов школьных линеек. Наши видеографы уловят атмосферу веселья, торжества и единства, которая присуща школьным мероприятиям. Мы стремимся запечатлеть не только выступления учеников, но и эмоции, радость и дух коллектива. Доверьте нам сохранение ярких и важных моментов школьных линеек - мы создадим видео, которое станет не только визуальным отражением события, но и ценной памятью о дружбе, творчестве и общей радости школьного сообщества.`,
                            src: '',
                            name: 'school-lines',
                            id: 3,
                            id_service: 5,
                        }
                    ]
                },
            ],
            contacts: [
                {
                    title: 'Телефон',
                    sub: '89990877847',
                    name: 'phone',
                    href: 'tel:89990877847'
                },
                {
                    title: 'Почта',
                    sub: 'example@gmail.com',
                    name: 'email',
                    href: 'mailto:example@gmail.com'
                },
                {
                    title: 'WhatsApp',
                    sub: 'Ссылка',
                    name: 'whatsapp',
                    href: 'https://wa.me/qr/APWRBSRYQXJFP1'
                },
                {
                    title: 'Telegram',
                    sub: 'Ссылка',
                    name: 'telegram',
                    href: 'https://t.me/Tarabrin_video'
                },
            ],
            permition: [
                {
                    id: 0,
                    title: `Доступность`,
                },
                {
                    id: 1,
                    title: `Качество`,
                },
                {
                    id: 2,
                    title: `Скорость`,
                },
                {
                    id: 3,
                    title: `Коммуникативность`,
                },
            ],
            coder: [
                {
                    id: 0,
                    title: `Артём Шамсеев`,
                    description: `фронтенд и бэкэнд разработчик`,
                    body: `Как начинающий Full-Stack разработчик, я обладаю основными навыками работы как с frontend, так и с backend частями веб-приложений. Моё понимание всего процесса разработки веб-проектов помогает мне эффективно координировать работу между клиентской и серверной сторонами. Хотя у меня ещё не так много опыта, но я быстро адаптируюсь к новым технологиям и подходам. В качестве начинающего Full-Stack разработчика, я всегда стремлюсь улучшать свои навыки и знания, чтобы создавать высококачественные веб-решения.`,
                    portfolio: [
                        {
                            id: '1gh',
                            title: 'сайт компании, занимающейся созданием мебели',
                            link: 'https://bubblsup.ry'
                        },
                        {
                            id: '1gl',
                            title: 'сайт компании, занимающейся созданием домов',
                            link: 'https://example1.com'
                        },
                        {
                            id: '1gf',
                            title: 'сайт компании, занимающейся созданием одежды',
                            link: 'https://example2.com'
                        },
                    ]
                },
                {
                    id: 1,
                    title: `Павел Пичугин`,
                    description: `фронтенд разработчик и дизайнер`,
                    body: `Занимая позицию дизайнера и front-end разработчика, я объединяю две важные роли в процессе создания веб-проектов. Моя работа как дизайнера позволяет мне понимать важность визуального восприятия и пользовательского опыта, а моя роль front-end разработчика дает мне технические навыки для реализации этих дизайнерских решений в жизнь. Работая в двух этих областях, я способен обеспечить гладкую интеграцию между дизайном и функциональностью. Хотя каждая из этих ролей представляет свои собственные уникальные вызовы, сочетание их вместе позволяет мне создавать продукты, которые выглядят столь же хорошо, как и работают. Моя двойная роль как дизайнера и front-end разработчика позволяет мне постоянно совершенствовать свои навыки и понимание как визуальной, так и технической сторон веб-разработки.`,
                    portfolio: [
                        {
                            id: '1g6',
                            title: 'сайт компании, занимающейся созданием обуви',
                            link: 'https://example3.com'
                        },
                        {
                            id: '1g8',
                            title: 'сайт компании, занимающейся созданием игрушек',
                            link: 'https://example4.com'
                        },
                        {
                            id: '1g7',
                            title: 'сайт компании, занимающейся созданием бытовой техники',
                            link: 'https://example5.com'
                        },
                    ]
                },
            ],
            feed: {
                main: [
                    {
                        id: 1,
                        date: `02.09.2023`,
                        user: `Юлия`,
                        feedback: `Я очень доволена результатом работы команды разработчиков данного веб-сайта. Они проявили высокую квалификацию и профессионализм во всем процессе создания сайта. Они внимательно выслушали все мои пожелания и требования, и воплотили их в жизнь. Результат превзошел все мои ожидания - сайт получился стильным, функциональным и удобным для пользователей.`
                    },
                    {
                        id: 2,
                        date: "03.09.2023",
                        user: "Александр",
                        feedback: "Я очень рад, что обратился к этой команде разработчиков. Они были очень внимательны к моим требованиям и создали веб-сайт, который идеально подходит для моего бизнеса. Сайт работает безупречно, и я получил много положительных отзывов от моих клиентов."
                    },
                    {
                        id: 3,
                        date: "04.09.2023",
                        user: "Мария",
                        feedback: "Работа с этой командой разработчиков была настоящим удовольствием. Они были очень профессиональны и отзывчивы, и я очень довольна результатом. Мой новый веб-сайт выглядит и работает превосходно."
                    },
                    {
                        id: 4,
                        date: "05.09.2023",
                        user: "Иван",
                        feedback: "Я был приятно удивлен скоростью и качеством работы этой команды разработчиков. Они быстро поняли мою концепцию и превратили ее в функциональный и красивый веб-сайт. Я определенно буду рекомендовать их своим коллегам."
                    },
                    {
                        id: 5,
                        date: "06.09.2023",
                        user: "Елена",
                        feedback: "Я очень довольна работой этой команды разработчиков. Они были очень внимательны к деталям и создали веб-сайт, который превзошел все мои ожидания. Я определенно буду использовать их услуги в будущем."
                    },
                    {
                        id: 6,
                        date: "07.09.2023",
                        user: "Сергей",
                        feedback: "Эта команда разработчиков сделала отличную работу по созданию моего веб-сайта. Они были очень профессиональны, внимательны и отзывчивы. Я очень доволен результатом и с удовольствием порекомендую их своим друзьям и коллегам."
                    }
                ]
            }
        }
    }
})

export default store