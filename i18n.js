/**
 * Internationalization (i18n) System for Monster Survivors
 * Supports: English (default), Chinese, Japanese, Spanish, French, German
 */

const i18n = {
    currentLang: 'en',
    
    languages: {
        en: { name: 'English', flag: '🇺🇸' },
        zh: { name: '中文', flag: '🇨🇳' },
        ja: { name: '日本語', flag: '🇯🇵' },
        es: { name: 'Español', flag: '🇪🇸' },
        fr: { name: 'Français', flag: '🇫🇷' },
        de: { name: 'Deutsch', flag: '🇩🇪' }
    },
    
    translations: {
        en: {
            // Navigation
            nav_logo: "Monster Survivors",
            nav_play: "Play Now",
            nav_features: "Features",
            nav_about: "About",
            
            // Hero
            hero_title: "Monster Survivors",
            hero_subtitle: "Battle endless hordes of monsters in this thrilling survival adventure that will test your skills and strategy!",
            hero_play: "Play Free Now",
            
            // Game Section
            game_title: "Start Your Survival Journey",
            game_controls: "Controls:",
            game_controls_desc: "Use WASD or arrow keys to move, mouse to aim and shoot. Survive as long as you can!",
            
            // Features
            features_title: "Game Features",
            feature_combat_title: "Epic Combat System",
            feature_combat_desc: "Engage in fast-paced battles with intuitive controls and responsive gameplay mechanics.",
            feature_weapons_title: "Weapon Upgrades",
            feature_weapons_desc: "Collect experience points to upgrade your weapons and unlock powerful new abilities.",
            feature_monsters_title: "Diverse Monsters",
            feature_monsters_desc: "Face off against dozens of unique monster types, each with their own attack patterns.",
            feature_survival_title: "Endless Survival",
            feature_survival_desc: "Test your limits in endless waves of increasingly challenging monster encounters.",
            
            // About
            about_title: "About Monster Survivors",
            about_desc: "Monster Survivors is an action-packed survival game that combines fast-paced combat with strategic gameplay elements. Players must navigate through increasingly difficult waves of monsters while collecting upgrades and power-ups to enhance their survival chances. The game features a unique progression system that rewards both skill and strategic thinking, making each playthrough a fresh and exciting experience.",
            about_waves: "Endless Waves",
            about_monsters: "Monster Types",
            about_weapons: "Weapon Upgrades",
            about_free: "Free to Play",
            
            // How to Play
            howto_title: "How to Play",
            howto_movement_title: "Movement",
            howto_movement_desc: "Use WASD keys or arrow keys to move your character around the battlefield.",
            howto_combat_title: "Combat",
            howto_combat_desc: "Use your mouse to aim and automatically shoot at nearby monsters.",
            howto_upgrades_title: "Upgrades",
            howto_upgrades_desc: "Collect experience gems to level up and choose powerful upgrades.",
            howto_survive_title: "Survive",
            howto_survive_desc: "Stay alive as long as possible while the monster waves get stronger!",
            
            // Footer
            footer_play: "Play Game",
            footer_features: "Features",
            footer_about: "About",
            footer_contact: "Contact",
            footer_copyright: "© 2025 Monster Survivors Online. All rights reserved.",
            footer_privacy: "Privacy Policy",
            footer_terms: "Terms of Service",
            
            // Meta
            meta_title: "Monster Survivors - Epic Online Survival Game | Play Free Now",
            meta_description: "Play Monster Survivors online for free! Battle hordes of monsters, upgrade your weapons, and survive as long as you can in this thrilling action-packed survival game."
        },
        
        zh: {
            nav_logo: "怪物幸存者",
            nav_play: "立即游玩",
            nav_features: "游戏特色",
            nav_about: "关于游戏",
            
            hero_title: "怪物幸存者",
            hero_subtitle: "在这场惊险刺激的生存冒险中，与无尽的怪物大军战斗，考验你的技巧和策略！",
            hero_play: "免费游玩",
            
            game_title: "开始你的生存之旅",
            game_controls: "操作说明：",
            game_controls_desc: "使用WASD或方向键移动，鼠标瞄准和射击。尽可能长时间地生存！",
            
            features_title: "游戏特色",
            feature_combat_title: "史诗战斗系统",
            feature_combat_desc: "参与快节奏的战斗，拥有直观的控制和响应迅速的游戏机制。",
            feature_weapons_title: "武器升级",
            feature_weapons_desc: "收集经验点数升级武器，解锁强大的新能力。",
            feature_monsters_title: "多样化怪物",
            feature_monsters_desc: "对抗数十种独特的怪物类型，每种都有自己的攻击模式。",
            feature_survival_title: "无尽生存",
            feature_survival_desc: "在无尽波次中测试你的极限，怪物挑战越来越强。",
            
            about_title: "关于怪物幸存者",
            about_desc: "怪物幸存者是一款动作丰富的生存游戏，结合了快节奏战斗和策略游戏元素。玩家必须在越来越困难的怪物波次中穿行，同时收集升级和强化道具来提高生存机会。游戏具有独特的进度系统，奖励技巧和战略思维，使每次游戏都是新鲜刺激的体验。",
            about_waves: "无尽波次",
            about_monsters: "怪物种类",
            about_weapons: "武器升级",
            about_free: "免费游玩",
            
            howto_title: "如何游玩",
            howto_movement_title: "移动",
            howto_movement_desc: "使用WASD键或方向键在战场上移动角色。",
            howto_combat_title: "战斗",
            howto_combat_desc: "使用鼠标瞄准并自动射击附近的怪物。",
            howto_upgrades_title: "升级",
            howto_upgrades_desc: "收集经验宝石升级并选择强大的升级。",
            howto_survive_title: "生存",
            howto_survive_desc: "在怪物波次越来越强的同时尽可能长时间存活！",
            
            footer_play: "玩游戏",
            footer_features: "特色",
            footer_about: "关于",
            footer_contact: "联系我们",
            footer_copyright: "© 2025 怪物幸存者在线。保留所有权利。",
            footer_privacy: "隐私政策",
            footer_terms: "服务条款",
            
            meta_title: "怪物幸存者 - 史诗在线生存游戏 | 免费游玩",
            meta_description: "免费在线游玩怪物幸存者！与怪物大军战斗，升级武器，在这款惊险刺激的动作生存游戏中尽可能长时间地生存。"
        },
        
        ja: {
            nav_logo: "モンスターサバイバーズ",
            nav_play: "今すぐプレイ",
            nav_features: "特徴",
            nav_about: "概要",
            
            hero_title: "モンスターサバイバーズ",
            hero_subtitle: "このスリリングなサバイバルアドベンチャーで、エンドレスなモンスターの大群と戦い、あなたのスキルと戦略を試しましょう！",
            hero_play: "無料でプレイ",
            
            game_title: "サバイバルの旅を始めよう",
            game_controls: "操作方法：",
            game_controls_desc: "WASDまたは矢印キーで移動、マウスで照準して射撃。できるだけ長く生き延びろ！",
            
            features_title: "ゲームの特徴",
            feature_combat_title: "エピックな戦闘システム",
            feature_combat_desc: "直感的なコントロールと反応の良いゲームプレイメカニクスで、ペースの速い戦闘に参加。",
            feature_weapons_title: "武器アップグレード",
            feature_weapons_desc: "経験値を集めて武器をアップグレードし、強力な新しい能力をアンロック。",
            feature_monsters_title: "多様なモンスター",
            feature_monsters_desc: "それぞれ独自の攻撃パターンを持つ数十種類のユニークなモンスターと対戦。",
            feature_survival_title: "エンドレスサバイバル",
            feature_survival_desc: "ますます困難になるモンスター遭遇のエンドレスウェーブで限界に挑戦。",
            
            about_title: "モンスターサバイバーズについて",
            about_desc: "モンスターサバイバーズは、ペースの速い戦闘と戦略的なゲームプレイ要素を組み合わせたアクション満載のサバイバルゲームです。プレイヤーは、アップグレードやパワーアップを収集しながら、ますます困難になるモンスターのウェーブをナビゲートし、生存チャンスを高める必要があります。",
            about_waves: "エンドレスウェーブ",
            about_monsters: "モンスター種類",
            about_weapons: "武器アップグレード",
            about_free: "無料プレイ",
            
            howto_title: "遊び方",
            howto_movement_title: "移動",
            howto_movement_desc: "WASDキーまたは矢印キーを使用してキャラクターを戦場で移動。",
            howto_combat_title: "戦闘",
            howto_combat_desc: "マウスを使用して照準し、近くのモンスターに自動的に発射。",
            howto_upgrades_title: "アップグレード",
            howto_upgrades_desc: "経験値ジェムを集めてレベルアップし、強力なアップグレードを選択。",
            howto_survive_title: "サバイブ",
            howto_survive_desc: "モンスターのウェーブが強くなる中、できるだけ長く生き延びろ！",
            
            footer_play: "ゲームプレイ",
            footer_features: "特徴",
            footer_about: "概要",
            footer_contact: "お問い合わせ",
            footer_copyright: "© 2025 モンスターサバイバーズオンライン。全著作権所有。",
            footer_privacy: "プライバシーポリシー",
            footer_terms: "利用規約",
            
            meta_title: "モンスターサバイバーズ - エピックなオンラインサバイバルゲーム | 無料プレイ",
            meta_description: "モンスターサバイバーズを無料でオンラインプレイ！モンスターの大群と戦い、武器をアップグレードし、このスリリングなアクション満載のサバイバルゲームでできるだけ長く生き延びよう。"
        },
        
        es: {
            nav_logo: "Monster Survivors",
            nav_play: "Jugar Ahora",
            nav_features: "Características",
            nav_about: "Acerca de",
            
            hero_title: "Monster Survivors",
            hero_subtitle: "¡Lucha contra hordas interminables de monstruos en esta emocionante aventura de supervivencia que pondrá a prueba tus habilidades y estrategia!",
            hero_play: "Jugar Gratis",
            
            game_title: "Comienza Tu Viaje de Supervivencia",
            game_controls: "Controles:",
            game_controls_desc: "Usa WASD o las teclas de flecha para moverte, el ratón para apuntar y disparar. ¡Sobrevive el mayor tiempo posible!",
            
            features_title: "Características del Juego",
            feature_combat_title: "Sistema de Combate Épico",
            feature_combat_desc: "Participa en batallas rápidas con controles intuitivos y mecánicas de juego responsivas.",
            feature_weapons_title: "Mejoras de Armas",
            feature_weapons_desc: "Recolecta puntos de experiencia para mejorar tus armas y desbloquear nuevas habilidades poderosas.",
            feature_monsters_title: "Monstruos Diversos",
            feature_monsters_desc: "Enfréntate a docenas de tipos únicos de monstruos, cada uno con sus propios patrones de ataque.",
            feature_survival_title: "Supervivencia Infinita",
            feature_survival_desc: "Pon a prueba tus límites en oleadas interminables de encuentros con monstruos cada vez más desafiantes.",
            
            about_title: "Acerca de Monster Survivors",
            about_desc: "Monster Survivors es un juego de supervivencia lleno de acción que combina combate rápido con elementos de juego estratégicos. Los jugadores deben navegar a través de oleadas de monstruos cada vez más difíciles mientras recolectan mejoras y potenciadores para aumentar sus posibilidades de supervivencia.",
            about_waves: "Oleadas Infinitas",
            about_monsters: "Tipos de Monstruos",
            about_weapons: "Mejoras de Armas",
            about_free: "Gratis para Jugar",
            
            howto_title: "Cómo Jugar",
            howto_movement_title: "Movimiento",
            howto_movement_desc: "Usa las teclas WASD o las flechas para mover a tu personaje por el campo de batalla.",
            howto_combat_title: "Combate",
            howto_combat_desc: "Usa el ratón para apuntar y disparar automáticamente a los monstruos cercanos.",
            howto_upgrades_title: "Mejoras",
            howto_upgrades_desc: "Recolecta gemas de experiencia para subir de nivel y elegir mejoras poderosas.",
            howto_survive_title: "Sobrevive",
            howto_survive_desc: "¡Mantente vivo el mayor tiempo posible mientras las oleadas de monstruos se fortalecen!",
            
            footer_play: "Jugar",
            footer_features: "Características",
            footer_about: "Acerca de",
            footer_contact: "Contacto",
            footer_copyright: "© 2025 Monster Survivors Online. Todos los derechos reservados.",
            footer_privacy: "Política de Privacidad",
            footer_terms: "Términos de Servicio",
            
            meta_title: "Monster Survivors - Juego de Supervivencia Online Épico | Juega Gratis",
            meta_description: "¡Juega Monster Survivors online gratis! Lucha contra hordas de monstruos, mejora tus armas y sobrevive el mayor tiempo posible en este emocionante juego de supervivencia de acción."
        },
        
        fr: {
            nav_logo: "Monster Survivors",
            nav_play: "Jouer Maintenant",
            nav_features: "Caractéristiques",
            nav_about: "À Propos",
            
            hero_title: "Monster Survivors",
            hero_subtitle: "Affrontez des hordes infinies de monstres dans cette aventure de survie palpitante qui mettra vos compétences et votre stratégie à l'épreuve !",
            hero_play: "Jouer Gratuitement",
            
            game_title: "Commencez Votre Voyage de Survie",
            game_controls: "Contrôles :",
            game_controls_desc: "Utilisez WASD ou les touches fléchées pour vous déplacer, la souris pour viser et tirer. Survivez aussi longtemps que possible !",
            
            features_title: "Caractéristiques du Jeu",
            feature_combat_title: "Système de Combat Épique",
            feature_combat_desc: "Engagez-vous dans des combats rapides avec des contrôles intuitifs et des mécaniques de jeu réactives.",
            feature_weapons_title: "Améliorations d'Armes",
            feature_weapons_desc: "Collectez des points d'expérience pour améliorer vos armes et débloquer de nouvelles capacités puissantes.",
            feature_monsters_title: "Monstres Divers",
            feature_monsters_desc: "Affrontez des dizaines de types de monstres uniques, chacun avec ses propres schémas d'attaque.",
            feature_survival_title: "Survie Infinie",
            feature_survival_desc: "Testez vos limites dans des vagues infinies de rencontres de monstres de plus en plus difficiles.",
            
            about_title: "À Propos de Monster Survivors",
            about_desc: "Monster Survivors est un jeu de survie plein d'action qui combine un combat rapide avec des éléments de jeu stratégiques. Les joueurs doivent naviguer à travers des vagues de monstres de plus en plus difficiles tout en collectant des améliorations et des power-ups pour augmenter leurs chances de survie.",
            about_waves: "Vagues Infinies",
            about_monsters: "Types de Monstres",
            about_weapons: "Améliorations d'Armes",
            about_free: "Gratuit à Jouer",
            
            howto_title: "Comment Jouer",
            howto_movement_title: "Mouvement",
            howto_movement_desc: "Utilisez les touches WASD ou les flèches pour déplacer votre personnage sur le champ de bataille.",
            howto_combat_title: "Combat",
            howto_combat_desc: "Utilisez votre souris pour viser et tirer automatiquement sur les monstres proches.",
            howto_upgrades_title: "Améliorations",
            howto_upgrades_desc: "Collectez des gemmes d'expérience pour monter de niveau et choisir des améliorations puissantes.",
            howto_survive_title: "Survivez",
            howto_survive_desc: "Restez en vie le plus longtemps possible pendant que les vagues de monstres deviennent plus fortes !",
            
            footer_play: "Jouer",
            footer_features: "Caractéristiques",
            footer_about: "À Propos",
            footer_contact: "Contact",
            footer_copyright: "© 2025 Monster Survivors Online. Tous droits réservés.",
            footer_privacy: "Politique de Confidentialité",
            footer_terms: "Conditions d'Utilisation",
            
            meta_title: "Monster Survivors - Jeu de Survie en Ligne Épique | Jouez Gratuitement",
            meta_description: "Jouez à Monster Survivors en ligne gratuitement ! Affrontez des hordes de monstres, améliorez vos armes et survivez le plus longtemps possible dans ce jeu de survie d'action palpitant."
        },
        
        de: {
            nav_logo: "Monster Survivors",
            nav_play: "Jetzt Spielen",
            nav_features: "Funktionen",
            nav_about: "Über",
            
            hero_title: "Monster Survivors",
            hero_subtitle: "Kämpfe gegen endlose Horden von Monstern in diesem spannenden Überlebensabenteuer, das deine Fähigkeiten und Strategie auf die Probe stellt!",
            hero_play: "Kostenlos Spielen",
            
            game_title: "Beginne dein Überlebensabenteuer",
            game_controls: "Steuerung:",
            game_controls_desc: "Benutze WASD oder Pfeiltasten zum Bewegen, Maus zum Zielen und Schießen. Überlebe so lange wie möglich!",
            
            features_title: "Spielfunktionen",
            feature_combat_title: "Episches Kampfsystem",
            feature_combat_desc: "Beteilige dich an schnellen Kämpfen mit intuitiver Steuerung und reaktionsschnellen Spielmechaniken.",
            feature_weapons_title: "Waffen-Upgrades",
            feature_weapons_desc: "Sammle Erfahrungspunkte, um deine Waffen aufzuwerten und mächtige neue Fähigkeiten freizuschalten.",
            feature_monsters_title: "Vielfältige Monster",
            feature_monsters_desc: "Stelle dich Dutzenden einzigartiger Monstertypen, jeder mit eigenen Angriffsmustern.",
            feature_survival_title: "Endloses Überleben",
            feature_survival_desc: "Teste deine Grenzen in endlosen Wellen zunehmend herausfordernder Monsterbegegnungen.",
            
            about_title: "Über Monster Survivors",
            about_desc: "Monster Survivors ist ein actionreiches Überlebensspiel, das schnelle Kämpfe mit strategischen Spielelementen kombiniert. Spieler müssen sich durch zunehmend schwierige Monsterwellen navigieren, während sie Upgrades und Power-ups sammeln, um ihre Überlebenschancen zu erhöhen.",
            about_waves: "Endlose Wellen",
            about_monsters: "Monstertypen",
            about_weapons: "Waffen-Upgrades",
            about_free: "Kostenlos Spielen",
            
            howto_title: "Wie man spielt",
            howto_movement_title: "Bewegung",
            howto_movement_desc: "Benutze WASD-Tasten oder Pfeiltasten, um deinen Charakter auf dem Schlachtfeld zu bewegen.",
            howto_combat_title: "Kampf",
            howto_combat_desc: "Benutze deine Maus zum Zielen und automatischen Schießen auf nahegelegene Monster.",
            howto_upgrades_title: "Upgrades",
            howto_upgrades_desc: "Sammle Erfahrungsjuwelen, um aufzusteigen und mächtige Upgrades zu wählen.",
            howto_survive_title: "Überlebe",
            howto_survive_desc: "Bleibe so lange am Leben wie möglich, während die Monsterwellen stärker werden!",
            
            footer_play: "Spielen",
            footer_features: "Funktionen",
            footer_about: "Über",
            footer_contact: "Kontakt",
            footer_copyright: "© 2025 Monster Survivors Online. Alle Rechte vorbehalten.",
            footer_privacy: "Datenschutzrichtlinie",
            footer_terms: "Nutzungsbedingungen",
            
            meta_title: "Monster Survivors - Episches Online-Überlebensspiel | Kostenlos Spielen",
            meta_description: "Spiele Monster Survivors kostenlos online! Kämpfe gegen Monsterhorden, rüste deine Waffen auf und überlebe so lange wie möglich in diesem spannenden Action-Überlebensspiel."
        }
    },
    
    init() {
        const savedLang = localStorage.getItem('i18n_lang');
        const browserLang = navigator.language.split('-')[0];
        
        if (savedLang && this.translations[savedLang]) {
            this.currentLang = savedLang;
        } else if (this.translations[browserLang]) {
            this.currentLang = browserLang;
        }
        
        this.updatePage();
        this.createLangSelector();
    },
    
    t(key) {
        return this.translations[this.currentLang]?.[key] || this.translations['en']?.[key] || key;
    },
    
    setLang(lang) {
        if (this.translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('i18n_lang', lang);
            this.updatePage();
            this.updateMeta();
        }
    },
    
    updatePage() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.textContent = this.t(key);
        });
        
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            el.placeholder = this.t(key);
        });
        
        document.documentElement.lang = this.currentLang;
    },
    
    updateMeta() {
        document.title = this.t('meta_title');
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.content = this.t('meta_description');
    },
    
    createLangSelector() {
        const selector = document.getElementById('lang-selector');
        if (!selector) return;
        
        selector.innerHTML = Object.entries(this.languages)
            .map(([code, info]) => `
                <button class="lang-btn ${code === this.currentLang ? 'active' : ''}" data-lang="${code}" title="${info.name}">
                    ${info.flag}
                </button>
            `).join('');
        
        selector.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.setLang(btn.dataset.lang);
                selector.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    }
};

document.addEventListener('DOMContentLoaded', () => i18n.init());
