(function() {
    'use strict';

    /**
     * CONFIGURACIÓN CENTRALIZADA (Source of Truth)
     */
    const AppConfig = {
        SELECTORS: {
            player: '#player',
            playerWrapper: '#player-wrapper',
            audio: '#main-audio',
            carousel: '.carousel-container',
            calendar: '#calendar-box',
            modal: '#modal',
            gameModal: '#arcade-game-modal'
        },
        /**
         * TEXTOS Y DEDICATORIAS DE CADA POLAROID
         * Cuando tengas listos los textos para cada canción, colócalos aquí.
         * Puedes usar texto normal o separar párrafos con salto doble (\n\n).
         */
        MODAL_STORIES: {
            "Arruinarlo Todo": `Sé que ha pasado tanto, pero aún lo recuerdo, aún tengo presente la sensación, quizás no el recuerdo exacto, pero sí la intención, la percepción de haber perdido tanto tiempo a tu lado. Quizás, si hubiera sido menos tonto, nuestra historia habría empezado antes, pero, aunque me cause tristeza, ahora estoy contigo y tengo que mantenerme firme ante aquello que en su momento no pude hacer.

Quizás no sea la mejor introducción, tal vez no debería ser la primera canción, pero al escucharla recuerdo que no te acompañé, que debí haber estado contigo cuando todo sucedió, que quizás, si hubiese sido así, no nos habríamos separado durante tanto tiempo. Pero quizás así estaba destinado a ser. Quién sabe...`,
            "Chica Acuario": `Sabes, esta fue una de las primeras canciones que me "dedicaste". Quiero pensarlo de ese modo; tal vez solo fue una canción compartida, pero me gusta pensar que pasé por tu mente cuando me la enviaste, que significó algo más, que hubo intención, que fue importante para ti... como lo fue para mí.

Y tal vez intento darle profundidad a algo que es más simple, pero cuando hablaba contigo me sentía querido, sentía que hasta lo tonto importaba y que lo absurdo, como las bromas, era lo que nos identificaba, porque, de algún modo... nos entendíamos. Aunque a veces yo me propasaba, me encantaba sentirme así de libre contigo, porque, de algúna manera, sentía cercanía en la lejanía.`,
            "Ojitos de Md": "",
            "Compañera": "",
            "Niño Amor": "",
            "O Pato": "",
            "Hard to Say Goodbye": "",
            "PONPONPON": "",
            "Bolerito Sad": "",
            "Parte de Mi": "",
            "Cancion de Amor": "",
            "Formula": "",
            "Algo Que Decirte": "",
            "Love Me Not": "",
            "Always Forever": "",
            "Aparato": "",
            "Salto": "",
            "Si Tú Me Quisieras": "",
            "Me Voy A Valparaíso": "",
            "Dulcito e Coco": "",
            "Movimiento Astral": "",
            "Cuando Regreses a Mi": "",
            "Beautiful Boy": "",
            "Imagine": ""
        },
        PLAYLIST: [
            {
                "title": "Algo Que Decirte",
                "artist": "AppleCats",
                "file": "musica/Algo Que Decirte.m4a",
                "img": "imagenes/albumes/AlgoQueDecirte.jpg"
            },
            {
                "title": "Always Forever",
                "artist": "Desconocido",
                "file": "musica/Always Forever.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Amiga da Minha Mulher",
                "artist": "Desconocido",
                "file": "musica/Amiga da Minha Mulher.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Amor De Verano",
                "artist": "Desconocido",
                "file": "musica/Amor De Verano.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Arruinarlo Todo",
                "artist": "Desconocido",
                "file": "musica/Arruinarlo Todo.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Añoranza Del Amor",
                "artist": "Desconocido",
                "file": "musica/Añoranza Del Amor.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Beautiful Boy (Darling Boy) (2010 Remastered)",
                "artist": "Desconocido",
                "file": "musica/Beautiful Boy (Darling Boy) (2010 Remastered).m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Besos, Limón y Miel",
                "artist": "Desconocido",
                "file": "musica/Besos, Limón y Miel.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Blue Hair",
                "artist": "Desconocido",
                "file": "musica/Blue Hair.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Brillo Mio",
                "artist": "Desconocido",
                "file": "musica/Brillo Mio.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Bubble Gum",
                "artist": "Desconocido",
                "file": "musica/Bubble Gum.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Bésame (Cnt. 1_1)",
                "artist": "Desconocido",
                "file": "musica/Bésame (Cnt. 1_1).m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Canción de Amor",
                "artist": "Desconocido",
                "file": "musica/Canción de Amor.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Cariño",
                "artist": "Desconocido",
                "file": "musica/Cariño.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Chica Acuario",
                "artist": "Desconocido",
                "file": "musica/Chica Acuario.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Compañera",
                "artist": "Desconocido",
                "file": "musica/Compañera.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Contigo",
                "artist": "Desconocido",
                "file": "musica/Contigo.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Cuando Regreses a Mi",
                "artist": "Desconocido",
                "file": "musica/Cuando Regreses a Mi.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "CURSI",
                "artist": "Desconocido",
                "file": "musica/CURSI.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Dopamina",
                "artist": "Desconocido",
                "file": "musica/Dopamina.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Dulcito e Coco",
                "artist": "Desconocido",
                "file": "musica/Dulcito e Coco.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "For the First Time",
                "artist": "Desconocido",
                "file": "musica/For the First Time.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Formula",
                "artist": "Desconocido",
                "file": "musica/Formula.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Fourth of July",
                "artist": "Desconocido",
                "file": "musica/Fourth of July.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Freak",
                "artist": "Desconocido",
                "file": "musica/Freak.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Goin' Out Of My Head",
                "artist": "Desconocido",
                "file": "musica/Goin' Out Of My Head.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Hard to Say Goodbye",
                "artist": "Desconocido",
                "file": "musica/Hard to Say Goodbye.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Heart To Heart",
                "artist": "Desconocido",
                "file": "musica/Heart To Heart.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "I Bet on Losing Dogs",
                "artist": "Desconocido",
                "file": "musica/I Bet on Losing Dogs.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Inside Out",
                "artist": "Desconocido",
                "file": "musica/Inside Out.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "La Declaración",
                "artist": "Desconocido",
                "file": "musica/La Declaración.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "La Luna",
                "artist": "Desconocido",
                "file": "musica/La Luna.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "La Raja de Tu Culo",
                "artist": "Desconocido",
                "file": "musica/La Raja de Tu Culo.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Limón y Sal",
                "artist": "Desconocido",
                "file": "musica/Limón y Sal.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Llena de Amor",
                "artist": "Desconocido",
                "file": "musica/Llena de Amor.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Love Me Not (feat. Rex Orange County)",
                "artist": "Desconocido",
                "file": "musica/Love Me Not (feat. Rex Orange County).m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Luna Completa",
                "artist": "Desconocido",
                "file": "musica/Luna Completa.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Mar",
                "artist": "Desconocido",
                "file": "musica/Mar.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Mariana",
                "artist": "Desconocido",
                "file": "musica/Mariana.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Materia Gris",
                "artist": "Desconocido",
                "file": "musica/Materia Gris.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Me and the Birds",
                "artist": "Desconocido",
                "file": "musica/Me and the Birds.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Meet You Again (Reimagined)",
                "artist": "Desconocido",
                "file": "musica/Meet You Again (Reimagined).m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Mi Corazón (feat. Natalia Lafourcade)",
                "artist": "Desconocido",
                "file": "musica/Mi Corazón (feat. Natalia Lafourcade).m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Niño Amor",
                "artist": "Desconocido",
                "file": "musica/Niño Amor.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Not Allowed",
                "artist": "Desconocido",
                "file": "musica/Not Allowed.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Nothing's New",
                "artist": "Desconocido",
                "file": "musica/Nothing's New.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Nunca Decís Tkm",
                "artist": "Desconocido",
                "file": "musica/Nunca Decís Tkm.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "O Pato",
                "artist": "Desconocido",
                "file": "musica/O Pato.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Ojitos de Md (Remix)",
                "artist": "Desconocido",
                "file": "musica/Ojitos de Md (Remix).m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Ojitos de Md",
                "artist": "Desconocido",
                "file": "musica/Ojitos de Md.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "On My Own (feat. NANDA)",
                "artist": "Desconocido",
                "file": "musica/On My Own (feat. NANDA).m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Otra Cerveza (feat. Crasa)",
                "artist": "Desconocido",
                "file": "musica/Otra Cerveza (feat. Crasa).m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Para Julio",
                "artist": "Desconocido",
                "file": "musica/Para Julio.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Parte de Mi",
                "artist": "Desconocido",
                "file": "musica/Parte de Mi.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Prom Queen",
                "artist": "Desconocido",
                "file": "musica/Prom Queen.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Pruébame a Ti",
                "artist": "Desconocido",
                "file": "musica/Pruébame a Ti.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Romantic Homicide",
                "artist": "Desconocido",
                "file": "musica/Romantic Homicide.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Románticos Anónimos",
                "artist": "Desconocido",
                "file": "musica/Románticos Anónimos.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Salto",
                "artist": "Desconocido",
                "file": "musica/Salto.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "She Is",
                "artist": "Desconocido",
                "file": "musica/She Is.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Si Tú Me Quisieras",
                "artist": "Desconocido",
                "file": "musica/Si Tú Me Quisieras.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Sin Vergüenza",
                "artist": "Desconocido",
                "file": "musica/Sin Vergüenza.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "space girl",
                "artist": "Desconocido",
                "file": "musica/space girl.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Step On Me",
                "artist": "Desconocido",
                "file": "musica/Step On Me.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "TOSCANA",
                "artist": "Desconocido",
                "file": "musica/TOSCANA.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Un Para Siempre",
                "artist": "Desconocido",
                "file": "musica/Un Para Siempre.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Verte Así",
                "artist": "Desconocido",
                "file": "musica/Verte Así.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Washing Machine Heart (Speed)",
                "artist": "Desconocido",
                "file": "musica/Washing Machine Heart (Speed).m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Washing Machine Heart",
                "artist": "Desconocido",
                "file": "musica/Washing Machine Heart.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Where'd All the Time Goï¼Ÿ",
                "artist": "Desconocido",
                "file": "musica/Where'd All the Time Goï¼Ÿ.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Y SI SOMOS NOVIOSï¼Ÿï¼Ÿï¼Ÿ",
                "artist": "Desconocido",
                "file": "musica/Y SI SOMOS NOVIOSï¼Ÿï¼Ÿï¼Ÿ.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Ya Me Hiciste Mal",
                "artist": "Desconocido",
                "file": "musica/Ya Me Hiciste Mal.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            },
            {
                "title": "Young",
                "artist": "Desconocido",
                "file": "musica/Young.m4a",
                "img": "imagenes/albumes/default_cover.jpg"
            }
        ],
        DATES: {
            together: { id: 'time-together', date: new Date('October 11, 2025 00:00:00'), label: 'Estamos juntos desde:' },
            met: { id: 'time-since-met', date: new Date('April 29, 2021 19:00:00'), label: 'Nos conocimos hace:' },
            metIRL: { id: 'time-we-met-irl', date: new Date('September 20, 2025 21:28:00'), label: 'Nos vimos hace:' }
        },
        GAME: {
            TILE_SIZE: 20,
            GRID_W: 35,
            GRID_H: 27,
            DEFAULT_SPEED: 130
        },
        ANIMATIONS: {
            doorFrameRate: 120,
            carouselAutoScroll: 5000
        }
    };

    /**
     * UTILIDADES GENERALES
     */
    const Utils = {
        get: (id) => document.getElementById(id),
        query: (sel) => document.querySelector(sel),
        queryAll: (sel) => document.querySelectorAll(sel),
        isDesignMode: () => document.body.classList.contains('design-mode'),
        
        formatTime: (s) => {
            if (isNaN(s)) return "0:00";
            const mins = Math.floor(s / 60);
            const secs = Math.floor(s % 60).toString().padStart(2, '0');
            return `${mins}:${secs}`;
        },

        toggleDisplay: (el, show) => {
            if (!el) return;
            if (show) {
                el.classList.add('show');
                if (el.id === 'arcade-game-modal') document.body.classList.add('no-scroll');
            } else {
                el.classList.remove('show');
                if (el.id === 'arcade-game-modal') document.body.classList.remove('no-scroll');
            }
        },

        createEl: (tag, className, text) => {
            const el = document.createElement(tag);
            if (className) el.className = className;
            if (text) el.textContent = text;
            return el;
        }
    };

    // --- MÓDULOS DE LÓGICA ---
    
    const MusicPlayer = (function() {
        const state = { audio: null, playlist: [], currentIndex: 0, isPlaying: false, isExpanded: false };
        const DOM = {};

        function init() {
            state.audio = Utils.get('main-audio');
            if (!state.audio || !Utils.get('player')) return;
            
            DOM.albumImg = Utils.get('album-img');
            DOM.barAlbumImg = Utils.get('bar-album-img');
            DOM.songName = Utils.get('song-name');
            DOM.artistName = Utils.get('artist-name');
            DOM.playBtnMain = Utils.get('p-main');
            DOM.playBtnOverlay = Utils.get('b-i') ? Utils.get('b-i').parentElement : null;
            DOM.progressBar = Utils.get('p-f');
            DOM.currentTime = Utils.get('cur');
            DOM.duration = Utils.get('dur');

            state.playlist = [...AppConfig.PLAYLIST];
            const marcoImg = Utils.get('marco-img');
            if (marcoImg) marcoImg.style.transform = `scale(2.08) translate(-14.8px, -4px)`;

            renderPlaylist();
            bindEvents();
            loadTrack(0);
            
            // Autoplay intento
            state.audio.play().then(() => { state.isPlaying = true; updateUI(); })
                .catch(() => {
                    const startAudioOnInteraction = () => {
                        if (!state.isPlaying) {
                            state.audio.play().then(() => {
                                state.isPlaying = true; updateUI();
                                document.removeEventListener('click', startAudioOnInteraction);
                                document.removeEventListener('touchstart', startAudioOnInteraction);
                                document.removeEventListener('keydown', startAudioOnInteraction);
                            });
                        }
                    };
                    document.addEventListener('click', startAudioOnInteraction);
                    document.addEventListener('touchstart', startAudioOnInteraction);
                    document.addEventListener('keydown', startAudioOnInteraction);
                });
            
            if (window.lucide) lucide.createIcons();
        }

        function renderPlaylist() {
            const container = Utils.get('playlist-content-overlay');
            if (!container) return;
            container.innerHTML = '';
            
            state.playlist.forEach((track, index) => {
                const item = Utils.createEl('div', 'playlist-static-item interactable');
                if (!track.artist || track.artist === 'Desconocido') {
                    item.innerHTML = `<span style="width:100%; text-align:left; font-weight:bold;">${track.title}</span>`;
                } else {
                    item.innerHTML = `<span>${track.title}</span><span style="opacity:0.7; font-size:0.9em;">${track.artist}</span>`;
                }
                item.addEventListener('click', (e) => { 
                    e.stopPropagation(); 
                    state.isPlaying = true; 
                    loadTrack(index); 
                });
                if (index === state.currentIndex) item.classList.add('selected');
                container.appendChild(item);
                if (index < state.playlist.length - 1) container.appendChild(Utils.createEl('div', 'playlist-static-sep'));
            });
        }
        
        function highlightTrack() {
            const items = document.querySelectorAll('.playlist-static-item');
            items.forEach((item, index) => {
                if (index === state.currentIndex) {
                    item.classList.add('selected');
                    item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                } else item.classList.remove('selected');
            });
        }

        function bindEvents() {
            Utils.query('.expand-trigger').addEventListener('click', toggleExpand);
            if(DOM.playBtnMain) DOM.playBtnMain.addEventListener('click', togglePlay);
            if(DOM.playBtnOverlay) DOM.playBtnOverlay.addEventListener('click', togglePlay);
            const albumInner = Utils.query('.album-inner');
            if (albumInner) albumInner.addEventListener('click', () => { if (!state.isExpanded) togglePlay(); });
            Utils.get('prev-btn').addEventListener('click', (e) => { e.stopPropagation(); changeTrack(-1); });
            Utils.get('next-btn').addEventListener('click', (e) => { e.stopPropagation(); changeTrack(1); });
            Utils.get('p-c').addEventListener('mousedown', seek); Utils.get('p-c').addEventListener('touchstart', seek, {passive: true});
            const dirBtn = Utils.get('dir-btn');
            const dirInput = Utils.get('dir-input');
            if (dirBtn && dirInput) {
                dirBtn.addEventListener('click', (e) => { e.stopPropagation(); dirInput.click(); });
                dirInput.addEventListener('change', handleDirectorySelect);
            }
            const toggleListBtn = Utils.get('toggle-list-btn');
            if (toggleListBtn) toggleListBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const wrapper = Utils.get('player-wrapper');
                if(wrapper) wrapper.classList.toggle('playlist-visible');
            });
            state.audio.ontimeupdate = updateProgress;
            state.audio.onloadedmetadata = () => { if(DOM.duration) DOM.duration.innerText = Utils.formatTime(state.audio.duration); };
            state.audio.onended = () => changeTrack(1);
            document.addEventListener('click', (e) => {
                const wrapper = Utils.get('player-wrapper');
                if (state.isExpanded && wrapper && !wrapper.contains(e.target)) toggleExpand();
            });
        }
        
        function forcePlay() {
             if(!state.isPlaying) state.audio.play().then(() => { state.isPlaying = true; updateUI(); }).catch(() => {});
        }

        function handleDirectorySelect(e) {
            const files = Array.from(e.target.files).filter(f => f.type.startsWith('audio/'));
            if (files.length > 0) {
                const wasEmpty = state.playlist.length === 0;
                files.forEach(f => {
                    let title = f.name.replace(/\.[^/.]+$/, "");
                    let artist = "Desconocido";
                    if (title.includes(" - ")) {
                        const parts = title.split(" - ");
                        artist = parts[0];
                        title = parts.slice(1).join(" - ");
                    }
                    state.playlist.push({ title, artist, file: URL.createObjectURL(f), img: 'imagenes/albumes/default_cover.jpg' });
                });
                renderPlaylist();
                if (wasEmpty) loadTrack(0);
            }
        }

        function toggleExpand(e) {
            if (Utils.isDesignMode()) return;
            if (e) e.stopPropagation();
            state.isExpanded = !state.isExpanded;
            const player = Utils.get('player');
            const wrapper = Utils.get('player-wrapper');
            const trigger = Utils.query('.expand-trigger');
            if (state.isExpanded) {
                player.classList.remove('mode-bubble'); player.classList.add('mode-expanded'); wrapper.classList.add('expanded-state');
                trigger.innerHTML = '<i data-lucide="x" class="w-6 h-6"></i>';
            } else {
                player.classList.add('mode-bubble'); player.classList.remove('mode-expanded'); wrapper.classList.remove('expanded-state');
                player.style.width = ''; player.style.height = ''; 
                trigger.innerHTML = '<i data-lucide="chevron-left" class="w-6 h-6"></i>';
                wrapper.classList.remove('playlist-visible');
            }
            if (window.lucide) lucide.createIcons();
            updateUI();
        }

        function loadTrack(index) {
            if (!state.playlist.length) return;
            if (index < 0) index = state.playlist.length - 1;
            if (index >= state.playlist.length) index = 0;
            state.currentIndex = index;
            const track = state.playlist[state.currentIndex];
            state.audio.src = track.file;
            if(DOM.albumImg) DOM.albumImg.src = track.img;
            if(DOM.barAlbumImg) DOM.barAlbumImg.src = track.img;
            if(DOM.songName) DOM.songName.innerText = track.title;
            if(DOM.artistName) DOM.artistName.innerText = track.artist || "Desconocido";
            if (state.isPlaying) state.audio.play().catch(() => {});
            updateUI();
            highlightTrack();
            if (window.CinnamorollMobilePlayer && CinnamorollMobilePlayer.updateTrack) {
                CinnamorollMobilePlayer.updateTrack(track, state.currentIndex);
            }
        }

        function changeTrack(delta) { loadTrack(state.currentIndex + delta); }

        function togglePlay(e) {
            if (Utils.isDesignMode()) return;
            if (e) e.stopPropagation();
            state.isPlaying ? state.audio.pause() : state.audio.play().catch(() => {});
            state.isPlaying = !state.isPlaying;
            updateUI();
        }

        function updateUI() {
            const iconName = state.isPlaying ? 'pause' : 'play';
            const bi = Utils.get('b-i'); 
            if (bi) bi.parentElement.innerHTML = `<i data-lucide="${iconName}" id="b-i" size="54" fill="currentColor"></i>`;
            const pi = Utils.get('p-i'); 
            if (pi) pi.parentElement.innerHTML = `<i data-lucide="${iconName}" id="p-i" size="24" fill="currentColor"></i>`;
            if(DOM.albumImg) DOM.albumImg.classList.toggle('spinning', state.isPlaying && !state.isExpanded);
            updateModalPlayState();
            if (window.CinnamorollMobilePlayer && CinnamorollMobilePlayer.updatePlayState) {
                CinnamorollMobilePlayer.updatePlayState(state.isPlaying);
            }
            if (window.lucide) lucide.createIcons();
        }

        function normalizeString(str) {
            if (!str) return '';
            return str.toString()
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/[^a-z0-9]/g, " ")
                .trim()
                .replace(/\s+/g, " ");
        }

        function findTrackIndex(title) {
            if (!title) return -1;
            const searchNorm = normalizeString(title);
            if (!searchNorm) return -1;

            // 1. Coincidencia exacta normalizada
            let idx = state.playlist.findIndex(t => normalizeString(t.title) === searchNorm);
            if (idx !== -1) return idx;

            // 2. Prefijo (e.g. "Beautiful Boy" en "Beautiful Boy (Darling Boy)...")
            idx = state.playlist.findIndex(t => normalizeString(t.title).startsWith(searchNorm));
            if (idx !== -1) return idx;

            // 3. Palabra delimitada / frase exacta dentro del título
            idx = state.playlist.findIndex(t => {
                const tNorm = normalizeString(t.title);
                const regex = new RegExp('(?:^|\\s)' + searchNorm + '(?:\\s|$)', 'i');
                return regex.test(tNorm);
            });
            return idx;
        }

        function playTrackByTitle(title, customImg, artist) {
            const idx = findTrackIndex(title);
            if (idx !== -1) {
                if (customImg) {
                    state.playlist[idx].img = customImg;
                }
                if (artist && (!state.playlist[idx].artist || state.playlist[idx].artist === 'Desconocido')) {
                    state.playlist[idx].artist = artist;
                }
                state.isPlaying = true;
                loadTrack(idx);
                return true;
            }
            return false;
        }

        function isCurrentTrack(title) {
            if (!title || state.currentIndex < 0 || state.currentIndex >= state.playlist.length) return false;
            const idx = findTrackIndex(title);
            return idx !== -1 && idx === state.currentIndex;
        }

        function updateModalPlayState() {
            const playIcon = Utils.get('modal-play-icon');
            if (!playIcon) return;
            const modalTitle = Utils.get('modal-title');
            if (!modalTitle || !modalTitle.textContent) return;
            const isThisTrack = isCurrentTrack(modalTitle.textContent);
            
            const overlay = playIcon.closest('.modal-play-overlay');
            const wrapper = Utils.get('modal-image-wrapper');
            if (isThisTrack && state.isPlaying) {
                playIcon.setAttribute('data-lucide', 'pause');
                if (overlay) overlay.classList.add('playing');
                if (wrapper) wrapper.classList.add('is-playing');
            } else {
                playIcon.setAttribute('data-lucide', 'play');
                if (overlay) overlay.classList.remove('playing');
                if (wrapper) wrapper.classList.remove('is-playing');
            }
            if (window.lucide) lucide.createIcons();
        }

        function updateProgress() {
            if (state.audio.duration && DOM.progressBar) {
                DOM.progressBar.style.width = (state.audio.currentTime / state.audio.duration * 100) + '%';
                if(DOM.currentTime) DOM.currentTime.innerText = Utils.formatTime(state.audio.currentTime);
                if(DOM.duration) DOM.duration.innerText = Utils.formatTime(state.audio.duration);
            }
            if (window.CinnamorollMobilePlayer && CinnamorollMobilePlayer.updateProgress) {
                CinnamorollMobilePlayer.updateProgress(state.audio.currentTime, state.audio.duration);
            }
        }

        let isDraggingProgress = false;
        function updateSeek(e) {
            const bar = Utils.get('p-c');
            if (state.audio.duration && bar) {
                let clientX = e.touches ? e.touches[0].clientX : e.clientX;
                let percent = (clientX - bar.getBoundingClientRect().left) / bar.offsetWidth;
                percent = Math.max(0, Math.min(1, percent));
                state.audio.currentTime = percent * state.audio.duration;
                if(DOM.progressBar) DOM.progressBar.style.width = (percent * 100) + "%";
            }
        }
        function seek(e) {
            if (Utils.isDesignMode()) return;
            e.stopPropagation(); 
            updateSeek(e);
            isDraggingProgress = true;
            
            const onMove = (moveEvent) => { if(isDraggingProgress) updateSeek(moveEvent); };
            const onUp = () => { 
                isDraggingProgress = false; 
                document.removeEventListener('mousemove', onMove);
                document.removeEventListener('mouseup', onUp);
                document.removeEventListener('touchmove', onMove);
                document.removeEventListener('touchend', onUp);
            };
            
            document.addEventListener('mousemove', onMove);
            document.addEventListener('mouseup', onUp);
            document.addEventListener('touchmove', onMove, {passive: true});
            document.addEventListener('touchend', onUp);
        }
        return { 
            init, 
            forcePlay, 
            playTrackByTitle, 
            togglePlay, 
            changeTrack,
            loadTrack,
            getPlaylist: () => state.playlist,
            getCurrentIndex: () => state.currentIndex,
            getCurrentTrack: () => state.playlist[state.currentIndex] || null,
            seekTrack: (percent) => {
                if (state.audio.duration) {
                    state.audio.currentTime = percent * state.audio.duration;
                    updateProgress();
                }
            },
            toggleRepeat: () => {
                state.audio.loop = !state.audio.loop;
                return state.audio.loop;
            },
            isPlaying: () => state.isPlaying,
            isCurrentTrack,
            normalizeString,
            updateModalPlayState
        };
    })();

        const EnvelopeAnimation = (function() {
        let state = 0;
        let isTyping = false;
        const IMAGES = ['imagenes/animaciones/sobre/sobre_cerrado.png','imagenes/animaciones/sobre/sobre_medio.png','imagenes/animaciones/sobre/sobre_abierto.png'];
        // Preload inmediato en memoria
        IMAGES.forEach(src => {
            const img = new Image();
            img.src = src;
        });

                // Audio Context para el sonido de máquina de escribir
        let audioCtx = null;
        function playTypewriterClick() {
            try {
                if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                if (audioCtx.state === 'suspended') audioCtx.resume();
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.type = 'square';
                // Variar un poco la frecuencia para que suene mecánico
                osc.frequency.setValueAtTime(300 + Math.random() * 200, audioCtx.currentTime);
                gain.gain.setValueAtTime(0.02, audioCtx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.03);
                osc.connect(gain); gain.connect(audioCtx.destination);
                osc.start(); osc.stop(audioCtx.currentTime + 0.03);
            } catch(e) {}
        }

        function typeWriterEffect(element, speed = 8) {
            if (isTyping) return;
            isTyping = true;
            const textNodes = [];
            function walk(node) {
                if (node.nodeType === 3) {
                    if (node.nodeValue.trim().length > 0) {
                        textNodes.push({ node: node, text: node.nodeValue });
                        node.nodeValue = ''; 
                    }
                } else {
                    node.childNodes.forEach(walk);
                }
            }
            walk(element);
            let i = 0; let charIndex = 0;
            function type() {
                if (i < textNodes.length) {
                    const current = textNodes[i];
                    // Escribir 2 caracteres por tick para mayor velocidad
                    let charsToAdd = current.text.substr(charIndex, 2);
                    current.node.nodeValue += charsToAdd;
                    charIndex += 2;
                    
                    if (charsToAdd.trim().length > 0 && Math.random() > 0.3) {
                        playTypewriterClick();
                    }

                    if (charIndex >= current.text.length) { i++; charIndex = 0; }
                    const wrapper = Utils.query('.letter-scroll-wrapper');
                    if (wrapper) wrapper.scrollTop = wrapper.scrollHeight;
                    setTimeout(type, speed);
                } else {
                    isTyping = false;
                }
            }
            type();
        }

        function reset() {
            state = 0;
            const envelopeStage = Utils.get('envelope-stage');
            const letterStage = Utils.get('letter-stage');
            const envelopeImg = Utils.get('envelope-img');
            const mobileEnvelopeImg = document.querySelector('#mobile-hero-envelope-btn img');
            const mobileHeroBtn = Utils.get('mobile-hero-envelope-btn');

            document.body.classList.remove('letter-overlay-open');
            if (mobileHeroBtn) {
                mobileHeroBtn.style.opacity = '1';
                mobileHeroBtn.style.visibility = 'visible';
                mobileHeroBtn.style.pointerEvents = 'auto';
            }
            if (envelopeStage) { 
                envelopeStage.classList.remove('hidden-stage'); 
                envelopeStage.style.display = 'flex'; 
                envelopeStage.style.opacity = '1'; 
            }
            if (letterStage) { 
                letterStage.classList.add('hidden-stage'); 
            }
            if (envelopeImg) { 
                envelopeImg.src = IMAGES[0]; 
                envelopeImg.style.transform = 'none'; 
            }
            if (mobileEnvelopeImg) {
                mobileEnvelopeImg.src = IMAGES[0];
                mobileEnvelopeImg.style.transform = '';
            }
        }

        function playPaperSound() {
            try {
                const ctx = new (window.AudioContext || window.webkitAudioContext)();
                const bufferSize = ctx.sampleRate * 0.1;
                const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
                const data = buffer.getChannelData(0);
                for (let i = 0; i < bufferSize; i++) { data[i] = Math.random() * 2 - 1; }
                const noise = ctx.createBufferSource();
                noise.buffer = buffer;
                const filter = ctx.createBiquadFilter();
                filter.type = 'highpass'; filter.frequency.value = 1000;
                const gain = ctx.createGain();
                gain.gain.setValueAtTime(0.5, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
                noise.connect(filter); filter.connect(gain); gain.connect(ctx.destination);
                noise.start();
            } catch(e) {}
        }

        function nextState() {
            const envelopeImg = Utils.get('envelope-img');
            if (envelopeImg) { envelopeImg.classList.remove('shake'); void envelopeImg.offsetWidth; envelopeImg.classList.add('shake'); }
            playPaperSound();
            state++;
            setTimeout(() => {
                if (state === 1 && envelopeImg) { envelopeImg.src = IMAGES[1]; envelopeImg.style.transform = 'rotate(-2deg) scale(1.05)'; }
                else if (state === 2 && envelopeImg) { envelopeImg.src = IMAGES[2]; envelopeImg.style.transform = 'rotate(2deg) scale(1.1)'; }
                else if (state === 3) {
                    const envelopeStage = Utils.get('envelope-stage');
                    const letterStage = Utils.get('letter-stage');
                    if (envelopeStage) envelopeStage.style.opacity = '0';
                    setTimeout(() => {
                        if (envelopeStage) envelopeStage.classList.add('hidden-stage');
                        if (letterStage) {
                            letterStage.classList.remove('hidden-stage');
                            const content = letterStage.querySelector('.letter-content');
                            if (content) typeWriterEffect(content);
                        }
                        MusicPlayer.forcePlay();
                    }, 500);
                }
            }, 200);
        }

        function openLetterOverlayDirectly() {
            const overlay = Utils.get('intro-overlay');
            const envelopeStage = Utils.get('envelope-stage');
            const letterStage = Utils.get('letter-stage');
            const mobileHeroBtn = Utils.get('mobile-hero-envelope-btn');

            document.body.classList.add('letter-overlay-open');
            if (mobileHeroBtn) {
                mobileHeroBtn.style.opacity = '0';
                mobileHeroBtn.style.visibility = 'hidden';
                mobileHeroBtn.style.pointerEvents = 'none';
            }
            if (envelopeStage) {
                envelopeStage.classList.add('hidden-stage');
                envelopeStage.style.display = 'none';
                envelopeStage.style.opacity = '0';
            }
            if (overlay) {
                overlay.classList.remove('hidden');
                if (window.MobileHistoryManager) MobileHistoryManager.pushModalState('letter-overlay');
            }
            if (letterStage) {
                letterStage.classList.remove('hidden-stage');
                const content = letterStage.querySelector('.letter-content');
                if (content) typeWriterEffect(content);
            }
            MusicPlayer.forcePlay();
        }

        function handleMobileEnvelopeStep(e) {
            if (e) e.stopPropagation();
            const mobileEnvelopeImg = document.querySelector('#mobile-hero-envelope-btn img');
            if (!mobileEnvelopeImg) return;

            if (state < 2) {
                mobileEnvelopeImg.classList.remove('shake');
                void mobileEnvelopeImg.offsetWidth;
                mobileEnvelopeImg.classList.add('shake');
                playPaperSound();
                state++;
                setTimeout(() => {
                    if (state === 1 && mobileEnvelopeImg) {
                        mobileEnvelopeImg.src = IMAGES[1];
                        mobileEnvelopeImg.style.transform = 'rotate(-2deg) scale(1.05)';
                    } else if (state === 2 && mobileEnvelopeImg) {
                        mobileEnvelopeImg.src = IMAGES[2];
                        mobileEnvelopeImg.style.transform = 'rotate(2deg) scale(1.1)';
                    }
                }, 200);
            } else {
                playPaperSound();
                state = 3;
                openLetterOverlayDirectly();
            }
        }

        function init() {
            const overlay = Utils.get('intro-overlay');
            const envelopeStage = Utils.get('envelope-stage');
            const openBtn = Utils.get('open-letter-btn');
            const closeBtn = Utils.get('close-letter-btn');
            const mobileHeroBtn = Utils.get('mobile-hero-envelope-btn');
            const mobileCardWrapper = Utils.get('mobile-letter-card-wrapper');

            if (openBtn) openBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                reset();
                if (overlay) {
                    overlay.classList.remove('hidden');
                    document.body.classList.add('letter-overlay-open');
                    if (window.MobileHistoryManager) MobileHistoryManager.pushModalState('letter-overlay');
                }
            });

            if (mobileHeroBtn) mobileHeroBtn.addEventListener('click', handleMobileEnvelopeStep);
            if (mobileCardWrapper) {
                mobileCardWrapper.addEventListener('click', (e) => {
                    if (document.body.getAttribute('data-mobile-tab') === 'letter') {
                        handleMobileEnvelopeStep(e);
                    }
                });
            }

            if (closeBtn) closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (overlay) overlay.classList.add('hidden');
                reset();
            });

            if (envelopeStage) {
                envelopeStage.addEventListener('click', (e) => { e.stopPropagation(); nextState(); });
                envelopeStage.addEventListener('mouseenter', () => { const img = Utils.get('envelope-img'); if(img){ img.classList.remove('shake'); void img.offsetWidth; img.classList.add('shake'); } });
                envelopeStage.addEventListener('mouseleave', () => { const img = Utils.get('envelope-img'); if(img) img.classList.remove('shake'); });
            }

            if (overlay) overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    overlay.classList.add('hidden');
                    reset();
                }
            });
        }
        return { init, reset };
    })();

    const TimeCounters = (function() {
        function updateCounter(config) {
            const el = Utils.get(config.id); if (!el) return;
            const label = el.dataset.label || config.label;
            const now = new Date();
            const startDate = config.date;
            const diff = now - startDate;
            
            const render = (bigText, smallText) => {
                el.innerHTML = `<span class="time-label">${label}</span><span class="time-main-val">${bigText}</span><div class="time-sub-val">${smallText}</div>`;
            };
            
            if (diff < 0) { render("¡Falta poco!", "Aún no hemos llegado a esa fecha."); return; }
            
            let years = now.getFullYear() - startDate.getFullYear();
            let anniversary = new Date(startDate);
            anniversary.setFullYear(startDate.getFullYear() + years);
            
            if (now < anniversary) {
                years--;
                anniversary.setFullYear(startDate.getFullYear() + years);
            }
            
            const diffMs = now - anniversary;
            const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
            const remMs = diffMs % (1000 * 60 * 60 * 24);
            const hours = Math.floor(remMs / (1000 * 60 * 60));
            const minutes = Math.floor((remMs % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remMs % (1000 * 60)) / 1000);
            
            const yearStr = years === 1 ? '1 Año' : `${years} Años`;
            const dayStr = days === 1 ? '1 Día' : `${days} Días`;
            const bigText = years > 0 ? (days > 0 ? `${yearStr}, ${dayStr}` : yearStr) : dayStr;
            
            const hStr = String(hours).padStart(2, '0');
            const mStr = String(minutes).padStart(2, '0');
            const sStr = String(seconds).padStart(2, '0');
            const smallText = `${hStr} Horas, ${mStr} Minutos y ${sStr} Segundos`;
            
            render(bigText, smallText);
        }
        function init() { const tick = () => Object.values(AppConfig.DATES).forEach(updateCounter); tick(); setInterval(tick, 1000); }
        return { init };
    })();

    const MobileTimeCounterSlider = (function() {
        let currentIndex = 0;
        const totalSlides = 3;
        let track = null;
        let wrapper = null;
        let dots = [];
        let boxes = [];
        let isDragging = false;
        let startX = 0;
        let currentX = 0;
        let startY = 0;
        let isHorizontalSwipe = null;

        function isMobile() {
            return window.innerWidth <= 768;
        }

        function init() {
            track = Utils.get('time-counters-track');
            wrapper = document.querySelector('.time-counters-wrapper');
            if (!track || !wrapper) return;
            boxes = Array.from(track.querySelectorAll('.time-counter-box'));
            dots = Array.from(document.querySelectorAll('.tc-dot'));

            dots.forEach((dot, idx) => {
                dot.addEventListener('click', (e) => {
                    e.stopPropagation();
                    goTo(idx, true);
                });
            });

            wrapper.addEventListener('touchstart', onTouchStart, { passive: true });
            wrapper.addEventListener('touchmove', onTouchMove, { passive: false });
            wrapper.addEventListener('touchend', onTouchEnd, { passive: true });
            wrapper.addEventListener('touchcancel', onTouchEnd, { passive: true });

            wrapper.addEventListener('mousedown', onMouseDown);
            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', onMouseUp);

            window.addEventListener('resize', () => {
                if (!isMobile() && track) {
                    track.style.transform = '';
                    track.style.transition = '';
                } else if (isMobile()) {
                    updateSlide(currentIndex, false);
                }
            });

            updateSlide(0, false);
        }

        function goTo(index, animate = true) {
            if (!isMobile()) return;
            if (index < 0) index = totalSlides - 1;
            if (index >= totalSlides) index = 0;
            currentIndex = index;
            updateSlide(currentIndex, animate);
        }

        function updateSlide(index, animate = true) {
            if (!track || !isMobile()) return;
            if (animate) {
                track.style.transition = 'transform 0.38s cubic-bezier(0.25, 1, 0.5, 1)';
            } else {
                track.style.transition = 'none';
            }
            track.style.transform = `translateX(-${index * 100}%)`;

            boxes.forEach((box, i) => {
                box.classList.toggle('active-slide', i === index);
            });

            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }

        function onTouchStart(e) {
            if (!isMobile() || !track) return;
            startX = e.touches[0].clientX;
            currentX = startX;
            startY = e.touches[0].clientY;
            isDragging = true;
            isHorizontalSwipe = null;
            track.style.transition = 'none';
        }

        function onTouchMove(e) {
            if (!isDragging || !isMobile() || !track) return;
            currentX = e.touches[0].clientX;
            const diffX = currentX - startX;
            const diffY = e.touches[0].clientY - startY;

            if (isHorizontalSwipe === null) {
                if (Math.abs(diffX) > 7 || Math.abs(diffY) > 7) {
                    isHorizontalSwipe = Math.abs(diffX) > Math.abs(diffY);
                }
            }

            if (isHorizontalSwipe) {
                if (e.cancelable) e.preventDefault();
                const containerWidth = wrapper ? wrapper.offsetWidth : track.offsetWidth;
                const offset = -currentIndex * containerWidth + diffX;
                track.style.transform = `translateX(${offset}px)`;
            }
        }

        function onTouchEnd() {
            if (!isDragging || !isMobile()) return;
            isDragging = false;
            const diffX = currentX - startX;

            if (isHorizontalSwipe && Math.abs(diffX) > 40) {
                if (diffX < 0) {
                    goTo(currentIndex + 1, true);
                } else {
                    goTo(currentIndex - 1, true);
                }
            } else {
                goTo(currentIndex, true);
            }
            isHorizontalSwipe = null;
        }

        let isMouseDown = false;
        function onMouseDown(e) {
            if (!isMobile() || !track) return;
            isMouseDown = true;
            startX = e.clientX;
            currentX = startX;
            track.style.transition = 'none';
        }

        function onMouseMove(e) {
            if (!isMouseDown || !isMobile() || !track) return;
            currentX = e.clientX;
            const diffX = currentX - startX;
            const containerWidth = wrapper ? wrapper.offsetWidth : track.offsetWidth;
            const offset = -currentIndex * containerWidth + diffX;
            track.style.transform = `translateX(${offset}px)`;
        }

        function onMouseUp() {
            if (!isMouseDown || !isMobile()) return;
            isMouseDown = false;
            const diffX = currentX - startX;
            if (Math.abs(diffX) > 40) {
                if (diffX < 0) goTo(currentIndex + 1, true);
                else goTo(currentIndex - 1, true);
            } else {
                goTo(currentIndex, true);
            }
        }

        return {
            init,
            goTo,
            next: () => goTo(currentIndex + 1),
            prev: () => goTo(currentIndex - 1),
            getCurrentIndex: () => currentIndex
        };
    })();
    window.MobileTimeCounterSlider = MobileTimeCounterSlider;

    const ImageCarousel = (function() {
        const state = { currentSlide: 0, slides: [], indicators: [], interval: null, isAnimating: false, isReady: false };
        function preloadImages(callback) {
            const totalFrames = 9; let loaded = 0;
            const onImageLoad = () => { loaded++; if (loaded === totalFrames) callback(); };
            for (let i = 1; i <= totalFrames; i++) { const img = new Image(); img.onload = onImageLoad; img.onerror = onImageLoad; img.src = `imagenes/animaciones/puertas/door_${i}.png`; }
        }
        function init() {
            const container = Utils.query('.carousel-container'); if (!container) return;
            let doorOverlay = Utils.get('door-overlay');
            if (!doorOverlay) { doorOverlay = Utils.createEl('div', 'door-overlay'); doorOverlay.id = 'door-overlay'; container.appendChild(doorOverlay); }
            doorOverlay.dataset.state = 1;
            state.slides = Utils.queryAll('.slide-group');
            if (!state.slides.length) return;
            setupIndicators(); setupControls(container); updateContent(0);
            preloadImages(() => { state.isReady = true; startAuto(); });
        }
        function setupIndicators() {
            const container = Utils.query('.carousel-indicators'); container.innerHTML = '';
            state.slides.forEach((_, i) => { const dot = Utils.createEl('div', 'interactable'); if (i === 0) dot.classList.add('active'); dot.dataset.index = i; container.appendChild(dot); });
            state.indicators = Utils.queryAll('.carousel-indicators div');
            container.addEventListener('click', (e) => { if (state.isAnimating || !state.isReady) return; const idx = parseInt(e.target.dataset.index); if (!isNaN(idx) && idx !== state.currentSlide) transitionTo(idx); });
        }
        function setupControls(container) {
            container.addEventListener('click', (e) => {
                if (state.isAnimating || !state.isReady) return;
                if (e.target.closest('.carousel-edge-left') || e.target.closest('.carousel-arrow-left')) {
                    transitionTo(state.currentSlide - 1);
                } else if (e.target.closest('.carousel-edge-right') || e.target.closest('.carousel-arrow-right')) {
                    transitionTo(state.currentSlide + 1);
                }
            });
            container.addEventListener('mouseenter', stopAuto); container.addEventListener('mouseleave', startAuto);
            
            // --- NUEVO: SOPORTE PARA SWIPE EN CELULARES ---
            let startX = 0;
            let startY = 0;
            container.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
                stopAuto();
            }, {passive: true});
            
            container.addEventListener('touchend', (e) => {
                if (!startX) return;
                let endX = e.changedTouches[0].clientX;
                let endY = e.changedTouches[0].clientY;
                let diffX = startX - endX;
                let diffY = startY - endY;
                
                if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 30) {
                    if (diffX > 0) transitionTo(state.currentSlide + 1);
                    else transitionTo(state.currentSlide - 1);
                }
                startX = 0; startY = 0;
                startAuto();
            }, {passive: true});
        }
        function transitionTo(targetIndex) {
            if (state.isAnimating || !state.isReady) return;
            state.isAnimating = true; stopAuto();
            if (targetIndex < 0) targetIndex = state.slides.length - 1;
            if (targetIndex >= state.slides.length) targetIndex = 0;
            const doorOverlay = Utils.get('door-overlay'); let currentState = 1;
            
            const frameDuration = 65; // Duración perfecta para visualización nítida de cada estado
            const step = () => {
                if (doorOverlay) doorOverlay.dataset.state = currentState;
                if (currentState === 5) updateContent(targetIndex);
                
                if (currentState < 9) {
                    currentState++;
                    setTimeout(step, frameDuration);
                } else {
                    setTimeout(() => {
                        currentState = 1;
                        if (doorOverlay) doorOverlay.dataset.state = 1;
                        state.isAnimating = false;
                        startAuto();
                    }, frameDuration);
                }
            };
            step();
        }
        function updateContent(index) {
            state.currentSlide = index;
            state.slides.forEach((s, i) => s.classList.toggle('active', i === index));
            state.indicators.forEach((dot, i) => dot.classList.toggle('active', i === index));
        }
        function startAuto() { stopAuto(); if (state.isReady && !document.body.classList.contains('design-mode')) state.interval = setInterval(() => transitionTo(state.currentSlide + 1), AppConfig.ANIMATIONS.carouselAutoScroll); }
        function stopAuto() { if (state.interval) clearInterval(state.interval); }
        return { init };
    })();

    const CalendarWidget = (function() {
        let currentMonth = new Date().getMonth(); let currentYear = new Date().getFullYear(); const today = new Date();
        const CONSTS = { NAMES: ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"], DAYS: ["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"] };
        function init() {
            const box = Utils.get('calendar-box'); if (!box) return;
            render(currentMonth, currentYear);
            box.addEventListener('click', (e) => { if (e.target.id === 'prev-month') changeMonth(-1); if (e.target.id === 'next-month') changeMonth(1); });
        }
        function changeMonth(delta) { currentMonth += delta; if (currentMonth < 0) { currentMonth = 11; currentYear--; } if (currentMonth > 11) { currentMonth = 0; currentYear++; } render(currentMonth, currentYear); }
        function render(month, year) {
            const grid = Utils.get('calendar-grid'); const label = Utils.get('month-year'); if (!grid || !label) return;
            grid.innerHTML = ""; CONSTS.DAYS.forEach(d => grid.appendChild(Utils.createEl('div', '', d)));
            const firstDay = new Date(year, month, 1).getDay(); const lastDate = new Date(year, month + 1, 0).getDate(); let day = 1;
            for (let i = 0; i < 42; i++) {
                const div = Utils.createEl('div');
                if (i >= firstDay && day <= lastDate) {
                    div.textContent = day;
                    if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) div.classList.add('today');
                    if (day === 11) { div.classList.add('special-day', 'interactable'); div.title = "Día especial"; }
                    day++;
                }
                grid.appendChild(div);
            }
            label.textContent = `${CONSTS.NAMES[month]} ${year}`;
        }
        return { init };
    })();

        const SnakeGame = (function() {
        let canvas, ctx, loopId;
        const state = { active: false, gameOver: false, speed: AppConfig.GAME.DEFAULT_SPEED, snake: [], food: { x: 0, y: 0 }, dir: { x: 1, y: 0 }, nextDir: { x: 1, y: 0 }, score: 0, lastTime: 0, beat: 0, highScore: localStorage.getItem('snakeHighScore') || 0 };
        
        let audioCtx = null;
        function playSound(type) {
            try {
                if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                if (audioCtx.state === 'suspended') audioCtx.resume();
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.connect(gain); gain.connect(audioCtx.destination);
                
                if (type === 'eat') {
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(400, audioCtx.currentTime);
                    osc.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 0.1);
                    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
                    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
                } else if (type === 'die') {
                    osc.type = 'sawtooth';
                    osc.frequency.setValueAtTime(150, audioCtx.currentTime);
                    osc.frequency.exponentialRampToValueAtTime(50, audioCtx.currentTime + 0.3);
                    gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
                    osc.start(); osc.stop(audioCtx.currentTime + 0.3);
                } else if (type === 'diff-normal') {
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5 (dulce y celestial)
                    gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.18);
                    osc.start(); osc.stop(audioCtx.currentTime + 0.18);
                } else if (type === 'diff-hard') {
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(659.25, audioCtx.currentTime); // E5 -> A5 (eléctrico)
                    osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.12);
                    gain.gain.setValueAtTime(0.14, audioCtx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);
                    osc.start(); osc.stop(audioCtx.currentTime + 0.2);
                } else if (type === 'diff-expert') {
                    osc.type = 'sawtooth';
                    osc.frequency.setValueAtTime(350, audioCtx.currentTime); // Fuego / Alerta
                    osc.frequency.exponentialRampToValueAtTime(1046.5, audioCtx.currentTime + 0.2);
                    gain.gain.setValueAtTime(0.16, audioCtx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);
                    osc.start(); osc.stop(audioCtx.currentTime + 0.25);
                }
            } catch(e) {}
        }

        function init() {
            stop(); canvas = Utils.get('arcade-game-canvas'); if (!canvas) return;
            const newCanvas = canvas.cloneNode(true); canvas.parentNode.replaceChild(newCanvas, canvas); canvas = newCanvas; ctx = canvas.getContext('2d');
            resetState(); spawnFood(); setupControls();
            Utils.get('score-display').textContent = 'Puntos: 0 | Mejor: ' + state.highScore; loopId = requestAnimationFrame(gameLoop);
        }
        function setDifficulty(level) {
            const speeds = { 'normal': 130, 'hard': 80, 'expert': 50 };
            state.speed = speeds[level] || 130;
            playSound('diff-' + level);
            
            // Reflejar la dificultad activa en los botones visuales (SVG)
            Utils.queryAll('.diff-svg-hitbox').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.difficulty === level);
            });
            
            if (!state.active || state.gameOver) init();
        }
        function resetState() { state.snake = [{x: 10, y: 10}, {x: 9, y: 10}, {x: 8, y: 10}]; state.dir = { x: 1, y: 0 }; state.nextDir = { x: 1, y: 0 }; state.score = 0; state.active = true; state.gameOver = false; }
        function spawnFood() {
            let valid = false;
            while (!valid) { state.food.x = Math.floor(Math.random() * AppConfig.GAME.GRID_W); state.food.y = Math.floor(Math.random() * AppConfig.GAME.GRID_H); valid = !state.snake.some(s => s.x === state.food.x && s.y === state.food.y); }
        }
        function setupControls() {
            window.addEventListener('keydown', handleKey);
            let startX = 0, startY = 0;
            canvas.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; startY = e.touches[0].clientY; e.preventDefault(); if (state.gameOver) init(); }, {passive: false});
            canvas.addEventListener('touchmove', (e) => {
                e.preventDefault(); if (state.gameOver) return;
                const endX = e.touches[0].clientX; const endY = e.touches[0].clientY; const diffX = endX - startX; const diffY = endY - startY;
                if (Math.abs(diffX) > Math.abs(diffY)) { if (Math.abs(diffX) > 30) { if (diffX > 0 && state.dir.x === 0) state.nextDir = { x: 1, y: 0 }; else if (diffX < 0 && state.dir.x === 0) state.nextDir = { x: -1, y: 0 }; startX = endX; startY = endY; } } 
                else { if (Math.abs(diffY) > 30) { if (diffY > 0 && state.dir.y === 0) state.nextDir = { x: 0, y: 1 }; else if (diffY < 0 && state.dir.y === 0) state.nextDir = { x: 0, y: -1 }; startX = endX; startY = endY; } }
            }, {passive: false});
        }
        function handleKey(e) {
            const keys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '];
            if (keys.includes(e.key)) e.preventDefault();
            if (state.gameOver && keys.includes(e.key)) { init(); return; }
            switch(e.key) { case 'ArrowUp': if(state.dir.y === 0) state.nextDir = { x: 0, y: -1 }; break; case 'ArrowDown': if(state.dir.y === 0) state.nextDir = { x: 0, y: 1 }; break; case 'ArrowLeft': if(state.dir.x === 0) state.nextDir = { x: -1, y: 0 }; break; case 'ArrowRight': if(state.dir.x === 0) state.nextDir = { x: 1, y: 0 }; break; }
        }
        function gameLoop(timestamp) {
            if (!state.active) return;
            if (timestamp - state.lastTime > state.speed) { update(); state.lastTime = timestamp; }
            if (state.active) draw();
            loopId = requestAnimationFrame(gameLoop);
        }
        function update() {
            state.dir = state.nextDir;
            const head = { x: state.snake[0].x + state.dir.x, y: state.snake[0].y + state.dir.y };
            if (head.x < 0 || head.x >= AppConfig.GAME.GRID_W || head.y < 0 || head.y >= AppConfig.GAME.GRID_H || state.snake.some(s => s.x === head.x && s.y === head.y)) { gameOver(); return; }
            state.snake.unshift(head);
            if (head.x === state.food.x && head.y === state.food.y) { 
                state.score += 10; 
                playSound('eat');
                if (state.score > state.highScore) { state.highScore = state.score; localStorage.setItem('snakeHighScore', state.highScore); }
                Utils.get('score-display').textContent = 'Puntos: ' + state.score + ' | Mejor: ' + state.highScore; 
                spawnFood(); 
            } else { state.snake.pop(); }
        }
        function draw() {
            // Cuadrícula en tablero pastel alternado (estilo Google Snake, visible pero delicada)
            const ts = AppConfig.GAME.TILE_SIZE;
            for (let c = 0; c < AppConfig.GAME.GRID_W; c++) {
                for (let r = 0; r < AppConfig.GAME.GRID_H; r++) {
                    ctx.fillStyle = (c + r) % 2 === 0 ? '#f6fbfd' : '#eaf4fa';
                    ctx.fillRect(c * ts, r * ts, ts, ts);
                }
            }
            
            // Líneas divisorias suaves perfectamente calibradas
            ctx.strokeStyle = 'rgba(70, 130, 180, 0.12)';
            ctx.lineWidth = 1;
            for (let i = 0; i <= canvas.width; i += ts) {
                ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, canvas.height); ctx.stroke();
            }
            for (let i = 0; i <= canvas.height; i += ts) {
                ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(canvas.width, i); ctx.stroke();
            }
            
            // Sombra suave para la serpiente
            ctx.shadowBlur = 6;
            ctx.shadowColor = 'rgba(3, 105, 161, 0.25)';
            
            state.snake.forEach((seg, i) => {
                let x = seg.x * AppConfig.GAME.TILE_SIZE + 1;
                let y = seg.y * AppConfig.GAME.TILE_SIZE + 1;
                let s = AppConfig.GAME.TILE_SIZE - 2;
                
                if (i === 0) {
                    // Cabeza: blanca con bordes celestes y carita tierna
                    ctx.fillStyle = '#ffffff';
                    ctx.fillRect(x, y, s, s);
                    
                    ctx.shadowBlur = 0;
                    ctx.strokeStyle = '#38bdf8';
                    ctx.lineWidth = 1.5;
                    ctx.strokeRect(x, y, s, s);
                    
                    // Ojitos tiernos
                    ctx.fillStyle = '#0f172a';
                    ctx.beginPath(); ctx.arc(x + 5, y + 6, 2, 0, Math.PI * 2); ctx.fill();
                    ctx.beginPath(); ctx.arc(x + 13, y + 6, 2, 0, Math.PI * 2); ctx.fill();
                    
                    // Rubor en mejillas
                    ctx.fillStyle = 'rgba(255, 150, 180, 0.65)';
                    ctx.beginPath(); ctx.arc(x + 3, y + 11, 2, 0, Math.PI * 2); ctx.fill();
                    ctx.beginPath(); ctx.arc(x + 15, y + 11, 2, 0, Math.PI * 2); ctx.fill();
                    
                    ctx.shadowBlur = 6;
                } else {
                    // Cuerpo: celeste cielo pastel vibrante
                    ctx.fillStyle = '#38bdf8';
                    ctx.fillRect(x, y, s, s);
                    
                    ctx.strokeStyle = '#0284c7';
                    ctx.lineWidth = 1;
                    ctx.strokeRect(x, y, s, s);
                }
            });
            
            // Comida (Corazón palpitante)
            state.beat += 0.2;
            const scale = 1 + Math.sin(state.beat) * 0.15;
            const cx = state.food.x * AppConfig.GAME.TILE_SIZE + AppConfig.GAME.TILE_SIZE / 2;
            const cy = state.food.y * AppConfig.GAME.TILE_SIZE + AppConfig.GAME.TILE_SIZE / 2;
            
            ctx.save();
            ctx.translate(cx, cy);
            ctx.scale(scale, scale);
            ctx.translate(-cx, -cy);
            ctx.shadowBlur = 12;
            ctx.shadowColor = 'rgba(255, 77, 109, 0.45)';
            ctx.fillStyle = '#ff4d6d';
            drawHeart(state.food.x * AppConfig.GAME.TILE_SIZE, state.food.y * AppConfig.GAME.TILE_SIZE + 2, AppConfig.GAME.TILE_SIZE);
            ctx.restore();
            ctx.shadowBlur = 0;
        }
        function drawHeart(x, y, size) {
            ctx.beginPath(); ctx.moveTo(x, y + size / 4); ctx.quadraticCurveTo(x, y, x + size / 4, y); ctx.quadraticCurveTo(x + size / 2, y, x + size / 4, y + size / 4);
            ctx.quadraticCurveTo(x + size / 2, y, x + size * 3/4, y); ctx.quadraticCurveTo(x + size, y, x + size, y + size / 4);
            ctx.quadraticCurveTo(x + size, y + size / 2, x + size / 2, y + size * 3/4); ctx.quadraticCurveTo(x, y + size / 2, x, y + size / 4); ctx.fill();
        }
        function gameOver() {
            playSound('die');
            state.active = false;
            state.gameOver = true;
            
            // Pantalla Game Over pastel esmerilada clara
            ctx.fillStyle = 'rgba(240, 248, 255, 0.9)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#e11d48';
            ctx.font = 'bold 38px "Segoe UI"';
            ctx.textAlign = 'center';
            ctx.shadowBlur = 10;
            ctx.shadowColor = 'rgba(225, 29, 72, 0.35)';
            ctx.fillText("¡Bien Cojuda!", canvas.width / 2, canvas.height / 2 - 20);
            
            ctx.shadowBlur = 0;
            ctx.font = 'bold 24px "Segoe UI"';
            ctx.fillStyle = '#0284c7';
            ctx.fillText("Puntos: " + state.score, canvas.width / 2, canvas.height / 2 + 22);
            
            ctx.font = '500 16px "Segoe UI"';
            ctx.fillStyle = '#64748b';
            ctx.fillText("Presiona cualquier tecla para continuar", canvas.width / 2, canvas.height / 2 + 62);
        }
        function stop() { state.active = false; if (loopId) cancelAnimationFrame(loopId); window.removeEventListener('keydown', handleKey); }
        return { init, stop, setDifficulty };
    })();

    const ModalManager = (function() {
        const modal = Utils.get('modal'); const arcadeModal = Utils.get('arcade-game-modal'); const overlay = Utils.get('intro-overlay');
        let currentCardInModal = null;

        function init() { 
            document.body.addEventListener('click', handleGlobalClick); 
            const imgWrapper = Utils.get('modal-image-wrapper');
            if (imgWrapper) {
                imgWrapper.addEventListener('click', handleModalImageClick);
            }
            const closeBtn = Utils.get('close-modal-btn');
            if (closeBtn) {
                closeBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    Utils.toggleDisplay(modal, false);
                    currentCardInModal = null;
                });
            }
        }

        function handleGlobalClick(e) {
            const target = e.target;
            if (target === modal || target.id === 'close-modal-btn' || target.closest('#close-modal-btn') || target.id === 'close-edit-card') { 
                Utils.toggleDisplay(modal, false); 
                Utils.toggleDisplay(Utils.get('card-edit-modal'), false); 
                currentCardInModal = null;
                return; 
            }
            if (target === arcadeModal || target.id === 'cerrar-game-modal' || target.closest('#cerrar-game-modal')) { Utils.toggleDisplay(arcadeModal, false); Utils.toggleDisplay(Utils.get('diff-selector-container'), false); SnakeGame.stop(); return; }
            if (target.closest('.open-game-modal-btn')) {
                e.preventDefault();
                Utils.toggleDisplay(arcadeModal, true);
                Utils.toggleDisplay(Utils.get('diff-selector-container'), true);
                if (window.MobileHistoryManager) MobileHistoryManager.pushModalState('arcade-modal');
                setTimeout(() => SnakeGame.init(), 100);
                return;
            }
            const card = target.closest('.card');
            if (card) { e.preventDefault(); e.stopPropagation(); if (document.body.classList.contains('design-mode')) { CardEditor.open(card); } else { openSongModal(card); } return; }
            if (target === overlay) { overlay.classList.add('hidden'); }
            const diffBtn = target.closest('.diff-svg-hitbox');
            if (diffBtn) {
                const diff = diffBtn.dataset.difficulty;
                SnakeGame.setDifficulty(diff);
            }
        }

        function handleModalImageClick(e) {
            if (!currentCardInModal) return;
            e.preventDefault();
            e.stopPropagation();

            const title = currentCardInModal.dataset.title;
            const subtitle = currentCardInModal.dataset.subtitle;
            const cardImg = currentCardInModal.querySelector('img');
            const customImg = cardImg ? cardImg.src : null;
            const spotifyLink = currentCardInModal.dataset.link;

            const isThisTrack = MusicPlayer.isCurrentTrack(title);

            if (isThisTrack) {
                MusicPlayer.togglePlay();
            } else {
                const played = MusicPlayer.playTrackByTitle(title, customImg, subtitle);
                if (!played) {
                    // Si no está disponible en la lista local, abre Spotify como respaldo
                    if (spotifyLink && spotifyLink !== '#' && spotifyLink.startsWith('http')) {
                        window.open(spotifyLink, '_blank');
                    }
                }
            }
            MusicPlayer.updateModalPlayState();
        }

        function getModalStory(card) {
            const title = card.dataset.title;
            if (AppConfig.MODAL_STORIES && AppConfig.MODAL_STORIES[title] && AppConfig.MODAL_STORIES[title].trim()) {
                return AppConfig.MODAL_STORIES[title];
            }
            if (card.dataset.desc && card.dataset.desc.trim()) {
                return card.dataset.desc;
            }
            return "";
        }

        function formatStoryContent(text) {
            if (!text || !text.trim()) {
                return '';
            }
            const safe = text
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;");
            
            const paragraphs = safe.split(/\n\s*\n/).filter(p => p.trim());
            if (paragraphs.length > 0) {
                return paragraphs.map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`).join('');
            }
            return `<p>${safe.replace(/\n/g, '<br>')}</p>`;
        }

        function openSongModal(card) {
            currentCardInModal = card;
            const titleEl = Utils.get('modal-title');
            const subEl = Utils.get('modal-subtitle');
            const descEl = Utils.get('modal-desc');

            if (titleEl) titleEl.textContent = card.dataset.title || '';
            if (subEl) subEl.textContent = card.dataset.subtitle || '';
            if (descEl) descEl.innerHTML = formatStoryContent(getModalStory(card));
            
            const modalImg = Utils.get('modal-img'); 
            const cardImg = card.querySelector('img');
            if (cardImg && modalImg) modalImg.src = cardImg.src;

            Utils.toggleDisplay(modal, true);
            if (window.MobileHistoryManager) MobileHistoryManager.pushModalState('song-modal');
            MusicPlayer.updateModalPlayState();
        }

        return { init, openSongModal };
    })();
    
    const ModalStickerController = (function() {
        let activeSticker = null; let isDragging = false, isResizing = false; let startX, startY, startRight, startBottom, startWidth, startLeft, startTop;
        function init() {
            document.body.addEventListener('mousedown', handleMouseDown); document.body.addEventListener('touchstart', handleMouseDown, {passive: false});
            document.addEventListener('mousemove', onMouseMove); document.addEventListener('touchmove', onMouseMove, {passive: false});
            document.addEventListener('mouseup', onMouseUp); document.addEventListener('touchend', onMouseUp);
        }
        function handleMouseDown(e) {
            if (!document.body.classList.contains('design-mode')) return;
            const handle = e.target.closest('.sticker-handle'); const wrapper = e.target.closest('.modal-sticker-container');
            if (handle && wrapper) { e.preventDefault(); e.stopPropagation(); startResize(e, wrapper); setActiveSticker(wrapper); return; }
            if (wrapper) { e.preventDefault(); startMove(e, wrapper); setActiveSticker(wrapper); }
        }
        function setActiveSticker(wrapper) {
            activeSticker = wrapper; const selector = Utils.get('sticker-selector'); const index = wrapper.id.split('-')[2];
            if (selector) { selector.value = index; selector.dispatchEvent(new Event('change')); }
            Utils.queryAll('.modal-sticker-container').forEach(el => el.classList.remove('editable')); activeSticker.classList.add('editable');
        }
        function getClientCoords(e) { return { x: e.touches ? e.touches[0].clientX : e.clientX, y: e.touches ? e.touches[0].clientY : e.clientY }; }
        function startMove(e, wrapper) {
            isDragging = true; activeSticker = wrapper; const {x, y} = getClientCoords(e); startX = x; startY = y;
            const style = window.getComputedStyle(activeSticker);
            startRight = parseFloat(activeSticker.style.right) || parseFloat(style.right) || 0;
            startBottom = parseFloat(activeSticker.style.bottom) || parseFloat(style.bottom) || 0;
            startLeft = parseFloat(activeSticker.style.left) || parseFloat(style.left) || 0;
            startTop = parseFloat(activeSticker.style.top) || parseFloat(style.top) || 0;
        }
        function startResize(e, wrapper) { isResizing = true; activeSticker = wrapper; const {x} = getClientCoords(e); startX = x; startWidth = activeSticker.offsetWidth; }
        function onMouseMove(e) {
            if (!activeSticker || (!isDragging && !isResizing)) return;
            const {x: clientX, y: clientY} = getClientCoords(e);
            if (isDragging) {
                const dx = startX - clientX; const dy = startY - clientY; 
                if (activeSticker.style.right && activeSticker.style.right !== 'auto') { const val = startRight + dx; activeSticker.style.right = `${val}px`; updateInput('modal-sticker-x', val); }
                else if (activeSticker.style.left && activeSticker.style.left !== 'auto') { const val = startLeft - dx; activeSticker.style.left = `${val}px`; updateInput('modal-sticker-x', val); }
                if (activeSticker.style.bottom && activeSticker.style.bottom !== 'auto') { const val = startBottom + dy; activeSticker.style.bottom = `${val}px`; updateInput('modal-sticker-y', val); }
                else if (activeSticker.style.top && activeSticker.style.top !== 'auto') { const val = startTop - dy; activeSticker.style.top = `${val}px`; updateInput('modal-sticker-y', val); }
            }
            if (isResizing) {
                const dx = startX - clientX; const newWidth = Math.max(20, startWidth + dx);
                activeSticker.style.width = `${newWidth}px`; activeSticker.style.height = 'auto'; updateInput('modal-sticker-w', newWidth); updateInput('modal-sticker-h', 0); 
            }
        }
        function updateInput(id, val) { const input = Utils.get(id); if(input) input.value = val; }
        function onMouseUp() { isDragging = false; isResizing = false; }
        return { init };
    })();

    const ParticleSystem = (function() {
        function init() { const container = Utils.get('particles-container'); if (!container) return; for (let i = 0; i < 20; i++) createParticle(container); }
        function createParticle(container) {
            const particle = Utils.createEl('div', 'particle'); const size = Math.random() * 5 + 2;
            particle.style.width = `${size}px`; particle.style.height = `${size}px`; particle.style.top = `${Math.random() * 100}vh`; particle.style.left = `${Math.random() * 100}vw`;
            const duration = Math.random() * 20 + 10; particle.style.setProperty('--duration', `${duration}s`);
            particle.style.setProperty('--translateX', `${Math.random() * 200 - 100}px`); particle.style.setProperty('--translateY', `${Math.random() * 200 - 100}px`);
            container.appendChild(particle);
        }
        return { init };
    })();

    const CardEditor = (function() {
        let currentCard = null;
        function init() {
            const saveBtn = Utils.get('save-card-btn'); const addBtn = Utils.get('add-card-btn'); const exportBtn = Utils.get('export-html-btn');
            if (saveBtn) saveBtn.addEventListener('click', saveChanges); if (addBtn) addBtn.addEventListener('click', addNewCard); if (exportBtn) exportBtn.addEventListener('click', exportHTML);
        }
        function open(card) {
            currentCard = card; const modal = Utils.get('card-edit-modal'); const img = card.querySelector('img'); const h2 = card.querySelector('h2'); const sub = card.querySelector('.card-subtitle');
            Utils.get('edit-card-title').value = h2 ? h2.textContent : ''; Utils.get('edit-card-subtitle').value = sub ? sub.textContent : '';
            Utils.get('edit-card-link').value = card.dataset.link || ''; Utils.get('edit-card-img').value = img ? img.src : ''; 
            const existingDesc = card.dataset.desc || (AppConfig.MODAL_STORIES && AppConfig.MODAL_STORIES[card.dataset.title]) || '';
            Utils.get('edit-card-desc').value = existingDesc;
            Utils.toggleDisplay(modal, true);
        }
        function saveChanges() {
            if (!currentCard) return;
            const title = Utils.get('edit-card-title').value; const sub = Utils.get('edit-card-subtitle').value; const link = Utils.get('edit-card-link').value; const imgUrl = Utils.get('edit-card-img').value; const desc = Utils.get('edit-card-desc').value;
            currentCard.dataset.title = title; currentCard.dataset.subtitle = sub; currentCard.dataset.link = link; currentCard.dataset.desc = desc;
            if (AppConfig.MODAL_STORIES) { AppConfig.MODAL_STORIES[title] = desc; }
            const img = currentCard.querySelector('img'); const h2 = currentCard.querySelector('h2'); const subEl = currentCard.querySelector('.card-subtitle');
            if (img) img.src = imgUrl; if (h2) h2.textContent = title; if (subEl) subEl.textContent = sub;
            Utils.toggleDisplay(Utils.get('card-edit-modal'), false);
        }
        function addNewCard() {
            const target = Utils.get('card-target-select').value;
            const container = target === 'left' ? document.querySelector('.timeline-column.left .polaroids-wrapper') : document.querySelector('.timeline-column.right .polaroids-wrapper');
            if (!container) return;
            const card = Utils.createEl('div', 'card interactable');
            card.dataset.title = "Nueva Carta"; card.dataset.subtitle = "Artista"; card.dataset.desc = "Descripción"; card.dataset.link = "#";
            card.innerHTML = `<img src="imagenes/albumes/default.jpg" onerror="this.src='https://via.placeholder.com/200x240?text=Nueva+Imagen'" alt="Nueva Carta" loading="lazy"><div class="card-content"><h2>Nueva Carta</h2><span class="card-subtitle">Artista</span></div>`;
            container.appendChild(card); card.scrollIntoView({ behavior: 'smooth' });
        }
        function exportHTML() {
            const leftCols = document.querySelector('.timeline-column.left .polaroids-wrapper').innerHTML;
            const rightCols = document.querySelector('.timeline-column.right .polaroids-wrapper').innerHTML;
            const out = Utils.get('css-output'); out.style.display = 'block'; out.value = `<!-- COLUMNA IZQUIERDA -->\n${leftCols}\n\n<!-- COLUMNA DERECHA -->\n${rightCols}`; out.select(); document.execCommand('copy'); alert('HTML de cartas copiado al portapapeles');
        }
        return { init, open };
    })();

    const DesignTools = (function() {
        function bindStyle(el, inputId, styleProp, unit = '') {
            const input = Utils.get(inputId);
            if (!input || !el) return;
            input.addEventListener('input', () => { el.style[styleProp] = input.value + unit; });
        }
        function updateBg(el, url) { if(el && url) el.style.backgroundImage = `url('${url}')`; }
        function handleFile(e, el) { if (e.target.files && e.target.files[0]) { const url = URL.createObjectURL(e.target.files[0]); updateBg(el, url); } }

        function setupModalStickerControls() {
            const selector = Utils.get('sticker-selector');
            const visibleChk = Utils.get('sticker-visible');
            const urlInput = Utils.get('modal-sticker-url');
            const fileInput = Utils.get('modal-sticker-file');
            const xInput = Utils.get('modal-sticker-x');
            const yInput = Utils.get('modal-sticker-y');
            const wInput = Utils.get('modal-sticker-w');
            const hInput = Utils.get('modal-sticker-h');
            const exportBtn = Utils.get('export-sticker-btn');
            const out = Utils.get('css-output');

            const getCurrentSticker = () => Utils.get(`modal-sticker-${selector ? selector.value : '1'}`);
            const updateInputsFromSticker = () => {
                const el = getCurrentSticker();
                if(!el) return;
                if(visibleChk) visibleChk.checked = el.style.display !== 'none';
            };
            if(selector) selector.addEventListener('change', updateInputsFromSticker);

            const bindProp = (input, prop, unit='') => {
                if(!input) return;
                input.addEventListener('input', () => {
                    const el = getCurrentSticker();
                    if(el) {
                        el.style[prop] = input.value + unit;
                        if(prop === 'height' && input.value == 0) el.style.height = 'auto';
                    }
                });
            };
            if(xInput) xInput.addEventListener('input', () => { const el = getCurrentSticker(); if(el) { el.style.left = xInput.value + 'px'; el.style.right = 'auto'; } });
            if(yInput) yInput.addEventListener('input', () => { const el = getCurrentSticker(); if(el) { el.style.top = yInput.value + 'px'; el.style.bottom = 'auto'; } });
            bindProp(wInput, 'width', 'px');
            if(hInput) hInput.addEventListener('input', () => { const el = getCurrentSticker(); if(el) el.style.height = (hInput.value == 0) ? 'auto' : hInput.value + 'px'; });
            if(visibleChk) visibleChk.addEventListener('change', () => { const el = getCurrentSticker(); if(el) el.style.display = visibleChk.checked ? 'block' : 'none'; });
            if(urlInput) urlInput.addEventListener('input', () => { const el = getCurrentSticker(); if(el) { const img = el.querySelector('img'); if(img) img.src = urlInput.value; } });
            if(fileInput) fileInput.addEventListener('change', (e) => { if(e.target.files[0]) { const url = URL.createObjectURL(e.target.files[0]); const el = getCurrentSticker(); if(el) { const img = el.querySelector('img'); if(img) img.src = url; } } });
            if(exportBtn) exportBtn.addEventListener('click', () => {
               let html = '';
               for(let i=1; i<=4; i++) {
                   const el = Utils.get(`modal-sticker-${i}`);
                   if(el) {
                       const img = el.querySelector('img');
                       const src = img ? img.getAttribute('src') : '';
                       html += `<div id="modal-sticker-${i}" class="modal-sticker-container" style="${el.getAttribute('style')}">\n    <img class="sticker-img" src="${src}" onerror="this.src='https://media.tenor.com/a6a66d6d0a0a0a0a/cinnamoroll.gif'">\n    <div class="sticker-handle interactable"></div>\n</div>\n`;
                   }
               }
               out.style.display = 'block'; out.value = html; out.select(); document.execCommand('copy'); alert('HTML Stickers Copiado');
            });
            const glassBtn = Utils.get('export-modal-style-btn');
            if(glassBtn) glassBtn.addEventListener('click', () => {
                const op = Utils.get('modal-glass-opacity').value; const blur = Utils.get('modal-glass-blur').value; const w = Utils.get('modal-width').value; const h = Utils.get('modal-height').value;
                let css = `.modal-content {\n    background: rgba(255, 255, 255, ${op});\n    backdrop-filter: blur(${blur}px);\n    width: ${w}px;\n    height: ${h}px;\n}`;
                out.style.display = 'block'; out.value = css; out.select(); document.execCommand('copy'); alert('CSS Modal Copiado');
            });
            const modalContent = Utils.query('.modal-content');
            if(modalContent) {
                bindStyle(modalContent, 'modal-width', 'width', 'px'); bindStyle(modalContent, 'modal-height', 'height', 'px');
                const gOp = Utils.get('modal-glass-opacity'); if(gOp) gOp.addEventListener('input', () => modalContent.style.background = `rgba(255,255,255,${gOp.value})`);
            }
        }

        function setupCardTools() {}

        function init() {
            const btn = Utils.get('design-tool-btn'); const panel = Utils.get('design-tool-panel');
            if (btn) btn.addEventListener('click', () => { panel.classList.toggle('hidden'); document.body.classList.toggle('design-mode'); });

            // Atajo secreto para activar/ocultar la herramienta de diseño (Alt + D o Ctrl + Shift + D)
            window.addEventListener('keydown', (e) => {
                if ((e.altKey && (e.key === 'd' || e.key === 'D')) || (e.ctrlKey && e.shiftKey && (e.key === 'd' || e.key === 'D'))) {
                    e.preventDefault();
                    document.body.classList.toggle('dev-mode-active');
                    const isActive = document.body.classList.contains('dev-mode-active');
                    if (!isActive && panel) {
                        panel.classList.add('hidden');
                        document.body.classList.remove('design-mode');
                    }
                }
            });

            setupGroup(setupBackgroundControls); setupGroup(setupCalendarControls); setupGroup(setupPlayerControls);
            setupGroup(setupModalStickerControls); setupGroup(setupCardTools); setupGroup(setupPlaylistGenerator); 
            setupGroup(setupOverlayControls); setupGroup(setupListControls); setupGroup(setupDebugControls); 
        }
        function setupGroup(fn) { try { fn(); } catch(e) { console.warn("DesignTool module error", e); } }
        function setupDebugControls() { const chk = Utils.get('playlist-debug-toggle'); if (chk) { chk.addEventListener('change', () => { document.body.classList.toggle('playlist-debug-mode', chk.checked); }); } }
        function setupOverlayControls() {
            const el = Utils.get('game-blur-layer'); if (!el) return;
            const opInput = Utils.get('overlay-opacity'); const blurInput = Utils.get('overlay-blur'); const visInput = Utils.get('overlay-vis'); const expBtn = Utils.get('export-overlay-css-btn'); const out = Utils.get('css-output');
            const update = () => { const blur = blurInput.value; const op = opInput.value; el.style.backdropFilter = `blur(${blur}px)`; el.style.background = `rgba(0, 0, 0, ${op})`; el.style.display = visInput.checked ? 'block' : 'none'; };
            if (opInput) opInput.addEventListener('input', update); if (blurInput) blurInput.addEventListener('input', update); if (visInput) visInput.addEventListener('change', update);
            if (expBtn) { expBtn.addEventListener('click', () => { const blur = blurInput.value; const op = opInput.value; let css = `/* Overlay Visual (Snake) */\n#game-blur-layer {\n    backdrop-filter: blur(${blur}px) !important;\n    background: rgba(0, 0, 0, ${op}) !important;\n${!visInput.checked ? '    display: none !important;\n' : ''}}`; out.style.display = 'block'; out.value = css; out.select(); document.execCommand('copy'); alert('CSS Overlay Copiado'); }); }
        }
        function setupPlaylistGenerator() {
            const dirInput = Utils.get('json-dir-input'); const basePathInput = Utils.get('json-base-path'); const out = Utils.get('css-output');
            if (dirInput) { dirInput.addEventListener('change', (e) => { const files = Array.from(e.target.files).filter(f => f.type.startsWith('audio/') || f.name.endsWith('.mp3') || f.name.endsWith('.m4a')); const basePath = basePathInput.value || ''; const playlist = files.map(f => { let name = f.name.replace(/\.[^/.]+$/, ""); let artist = "Desconocido"; if (name.includes(" - ")) { const parts = name.split(" - "); artist = parts[0].trim(); name = parts.slice(1).join(" - ").trim(); } return { title: name, artist: artist, file: `${basePath}${f.name}`, img: "imagenes/albumes/default_cover.jpg" }; }); out.style.display = 'block'; out.value = JSON.stringify(playlist, null, 4); alert(`Generados ${playlist.length} items. Copia el JSON del cuadro de texto.`); }); }
        }
        function setupBackgroundControls() {
            const bgEl = Utils.get('page-background'); if (!bgEl) return;
            const update = () => { const op = Utils.get('bg-opacity').value; const sat = Utils.get('bg-saturate').value; const blur = Utils.get('bg-blur').value; bgEl.style.filter = `saturate(${sat}) opacity(${op}) blur(${blur}px)`; };
            ['bg-opacity', 'bg-saturate', 'bg-blur'].forEach(id => Utils.get(id)?.addEventListener('input', update));
        }
        function setupCalendarControls() {
            const el = Utils.get('calendar-box'); const layer = Utils.get('calendar-bg-layer'); if (!el || !layer) return;
            bindStyle(el, 'calendar-width', 'width', 'px'); bindStyle(el, 'calendar-height', 'height', 'px');
            const op = Utils.get('calendar-bg-opacity'); const blur = Utils.get('calendar-bg-blur');
            const updateFilter = () => layer.style.filter = `opacity(${op.value}) blur(${blur.value}px)`;
            if (op) op.addEventListener('input', updateFilter); if (blur) blur.addEventListener('input', updateFilter);
            const urlIn = Utils.get('calendar-bg-url'); const fileIn = Utils.get('calendar-bg-file');
            if (urlIn) urlIn.addEventListener('input', () => updateBg(layer, urlIn.value));
            if (fileIn) fileIn.addEventListener('change', (e) => handleFile(e, layer));
        }
        function setupPlayerControls() {
            const wrap = Utils.get('player-wrapper'); if (!wrap) return;
            const bindings = { 'player-pos-x': (v) => wrap.style.right = v + 'px', 'player-pos-y': (v) => wrap.style.bottom = v + 'px', 'player-scale': (v) => wrap.style.setProperty('--scale', v), 'player-exp-x': (v) => wrap.style.setProperty('--w-r-exp', v + 'px'), 'player-exp-y': (v) => wrap.style.setProperty('--w-b-exp', v + 'px'), 'player-exp-w': (v) => wrap.style.setProperty('--exp-w', v + 'px'), 'player-exp-h': (v) => wrap.style.setProperty('--exp-h', v + 'px'), 'close-btn-list-x': (v) => wrap.style.setProperty('--xt-r-list', v + 'px'), 'close-btn-list-y': (v) => wrap.style.setProperty('--xt-t-list', v + 'px') };
            Object.keys(bindings).forEach(id => { const el = Utils.get(id); if(el) el.addEventListener('input', () => bindings[id](el.value)); });
            const btn = Utils.get('export-player-config-btn'); const out = Utils.get('css-output');
            if(btn) btn.addEventListener('click', () => { const w = Utils.get('player-exp-w').value; const h = Utils.get('player-exp-h').value; const listX = Utils.get('close-btn-list-x').value; const listY = Utils.get('close-btn-list-y').value; let css = `/* Configuración Jugador */\n#player-wrapper {\n    --exp-w: ${w}px;\n    --exp-h: ${h}px;\n    --xt-r-list: ${listX}px;\n    --xt-t-list: ${listY}px;\n}\n`; out.style.display = 'block'; out.value = css; out.select(); document.execCommand('copy'); alert('CSS Config Jugador Copiado'); });
        }
        function setupListControls() {
            const container = Utils.get('playlist-container'); const overlay = Utils.get('playlist-content-overlay'); const manualWrapper = Utils.get('playlist-manual-wrapper'); const playerWrapper = Utils.get('player-wrapper'); const btn = Utils.get('export-list-css-btn'); const out = Utils.get('css-output');
            const controls = [ { id: 'list-cont-w', el: container, prop: 'width', unit: 'px' }, { id: 'list-cont-h', el: container, prop: 'height', unit: 'px' }, { id: 'list-cont-mb', el: container, prop: 'marginBottom', unit: 'px' }, { id: 'list-ov-t', el: overlay, prop: 'top', unit: 'px' }, { id: 'list-ov-l', el: overlay, prop: 'left', unit: 'px' }, { id: 'list-ov-w', el: overlay, prop: 'width', unit: 'px' }, { id: 'list-ov-h', el: overlay, prop: 'height', unit: 'px' } ];
            controls.forEach(ctrl => { const numInput = Utils.get(ctrl.id); const rngInput = Utils.get(ctrl.id + '-range'); const update = (val) => { ctrl.el.style[ctrl.prop] = val + ctrl.unit; if (numInput && numInput.value != val) numInput.value = val; if (rngInput && rngInput.value != val) rngInput.value = val; }; if (numInput) numInput.addEventListener('input', () => update(numInput.value)); if (rngInput) rngInput.addEventListener('input', () => update(rngInput.value)); });
            const s3Num = Utils.get('state3-slide'); const s3Rng = Utils.get('state3-slide-range'); const updateState3 = (val) => { if (playerWrapper) playerWrapper.style.setProperty('--state3-slide-amount', val + 'px'); if (s3Num && s3Num.value != val) s3Num.value = val; if (s3Rng && s3Rng.value != val) s3Rng.value = val; }; if(s3Num) s3Num.addEventListener('input', () => updateState3(s3Num.value)); if(s3Rng) s3Rng.addEventListener('input', () => updateState3(s3Rng.value));
            const offXNum = Utils.get('list-off-x'); const offXRng = Utils.get('list-off-x-range'); const offYNum = Utils.get('list-off-y'); const offYRng = Utils.get('list-off-y-range');
            const updateOffset = () => { const x = offXNum.value; const y = offYNum.value; if (manualWrapper) manualWrapper.style.transform = `translate(${x}px, ${y}px)`; if (offXRng.value != x) offXRng.value = x; if (offYRng.value != y) offYRng.value = y; if (offXNum.value != offXRng.value) offXNum.value = offXRng.value; if (offYNum.value != offYRng.value) offYNum.value = offYRng.value; };
            if(offXNum && offXRng) { offXNum.addEventListener('input', updateOffset); offXRng.addEventListener('input', () => { offXNum.value = offXRng.value; updateOffset(); }); }
            if(offYNum && offYRng) { offYNum.addEventListener('input', updateOffset); offYRng.addEventListener('input', () => { offYNum.value = offYRng.value; updateOffset(); }); }
            
            // --- NUEVOS CONTROLES ---
            const scrollRad = Utils.get('scroll-radius'); const scrollRadNum = Utils.get('scroll-radius-num');
            const updateScrollRad = (v) => { 
                document.documentElement.style.setProperty('--scrollbar-radius', v + 'px');
                if(scrollRad && scrollRad.value != v) scrollRad.value = v;
                if(scrollRadNum && scrollRadNum.value != v) scrollRadNum.value = v;
            };
            if(scrollRad) scrollRad.addEventListener('input', () => updateScrollRad(scrollRad.value));
            if(scrollRadNum) scrollRadNum.addEventListener('input', () => updateScrollRad(scrollRadNum.value));

            const scrollThumbH = Utils.get('scroll-thumb-min-h'); const scrollThumbHNum = Utils.get('scroll-thumb-min-h-num');
            const updateScrollThumbH = (v) => {
                document.documentElement.style.setProperty('--scrollbar-thumb-min-height', v + 'px');
                if(scrollThumbH && scrollThumbH.value != v) scrollThumbH.value = v;
                if(scrollThumbHNum && scrollThumbHNum.value != v) scrollThumbHNum.value = v;
            };
            if(scrollThumbH) scrollThumbH.addEventListener('input', () => updateScrollThumbH(scrollThumbH.value));
            if(scrollThumbHNum) scrollThumbHNum.addEventListener('input', () => updateScrollThumbH(scrollThumbHNum.value));

            const btnX = Utils.get('btn-list-x'); const btnXNum = Utils.get('btn-list-x-num');
            const btnY = Utils.get('btn-list-y'); const btnYNum = Utils.get('btn-list-y-num');
            
            const updateBtnPos = () => {
                const x = btnX.value; const y = btnY.value;
                document.documentElement.style.setProperty('--btn-list-x', x + 'px');
                document.documentElement.style.setProperty('--btn-list-y', y + 'px');
                if(btnXNum && btnXNum.value != x) btnXNum.value = x;
                if(btnYNum && btnYNum.value != y) btnYNum.value = y;
            };
            [btnX, btnY, btnXNum, btnYNum].forEach(el => el?.addEventListener('input', updateBtnPos));

            // --- CONTROLES ESTILO PLAYLIST ---
            const styleInputs = [
                { id: 'pl-sel-color', var: '--pl-sel-color', suffix: '' },
                { id: 'pl-sel-opacity', var: '--pl-sel-opacity', suffix: '' },
                { id: 'pl-hover-scale', var: '--pl-hover-scale', suffix: '' },
                { id: 'pl-anim-dur', var: '--pl-anim-dur', suffix: 's' }
            ];
            styleInputs.forEach(item => {
                const el = Utils.get(item.id);
                if(el) {
                    el.addEventListener('input', () => {
                        document.documentElement.style.setProperty(item.var, el.value + item.suffix);
                        const numEl = Utils.get(item.id + '-num');
                        if(numEl) numEl.value = el.value;
                    });
                    const numEl = Utils.get(item.id + '-num');
                    if(numEl) numEl.addEventListener('input', () => {
                        el.value = numEl.value;
                        el.dispatchEvent(new Event('input'));
                    });
                }
            });

            if (btn) { btn.addEventListener('click', () => { 
                const w = Utils.get('list-cont-w').value; 
                const h = Utils.get('list-cont-h').value; 
                const mb = Utils.get('list-cont-mb').value; 
                const ot = Utils.get('list-ov-t').value; 
                const ol = Utils.get('list-ov-l').value; 
                const ow = Utils.get('list-ov-w').value; 
                const oh = Utils.get('list-ov-h').value; 
                const offX = Utils.get('list-off-x').value; 
                const offY = Utils.get('list-off-y').value; 
                const slideAmount = Utils.get('state3-slide').value; 
                
                // Nuevos valores para exportar
                const sRad = Utils.get('scroll-radius').value;
                const bX = Utils.get('btn-list-x').value;
                const bY = Utils.get('btn-list-y').value;
                const sMinH = Utils.get('scroll-thumb-min-h').value;

                // Valores Estilo Visual
                const plColor = Utils.get('pl-sel-color').value;
                const plOp = Utils.get('pl-sel-opacity').value;
                const plScale = Utils.get('pl-hover-scale').value;
                const plAnim = Utils.get('pl-anim-dur').value;

                let css = `/* Playlist Layout */
:root {
    --scrollbar-radius: ${sRad}px;
    --btn-list-x: ${bX}px;
    --btn-list-y: ${bY}px;
    --scrollbar-thumb-min-height: ${sMinH}px;
    
    /* Variables Visuales Playlist */
    --pl-sel-color: ${plColor};
    --pl-sel-opacity: ${plOp};
    --pl-hover-scale: ${plScale};
    --pl-anim-dur: ${plAnim}s;
}
#player-wrapper {
    --state3-slide-amount: ${slideAmount}px;
}
#playlist-container {
    width: ${w}px;
    height: ${h}px;
    margin-bottom: ${mb}px;
}
#playlist-manual-wrapper {
    transform: translate(${offX}px, ${offY}px);
}
#playlist-content-overlay {
    top: ${ot}px;
    left: ${ol}px;
    width: ${ow}px;
    height: ${oh}px;
}`; out.style.display = 'block'; out.value = css; out.select(); document.execCommand('copy'); alert('CSS Playlist Copiado'); }); }
        }
        return { init };
    })();

    
    const CinnamorollMobilePlayer = (function() {
        const state = {
            isShuffle: false,
            isRepeat: false,
            favorites: new Set(),
            isDraggingSeek: false,
            currentTab: 'player'
        };

        function switchTab(tabName, pushHistory = true) {
            const validTabs = ['player', 'photos', 'songs', 'letter'];
            if (!validTabs.includes(tabName)) return;

            const prevTab = state.currentTab;
            state.currentTab = tabName;
            document.body.dataset.mobileTab = tabName;

            // Actualizar botones de la barra de navegación inferior
            const navBtns = Utils.queryAll('#mobile-bottom-nav .mobile-nav-btn');
            navBtns.forEach(btn => {
                const isActive = btn.dataset.tab === tabName;
                btn.classList.toggle('active', isActive);
            });

            // Si cambiamos a fotos, canciones o carta, hacer scroll arriba suave
            if (tabName !== 'player') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
            }

            if (tabName === 'photos' && window.MobileTimeCounterSlider) {
                window.MobileTimeCounterSlider.goTo(0, false);
            }

            if (pushHistory && window.MobileHistoryManager && tabName !== prevTab) {
                MobileHistoryManager.pushTabState(tabName);
            }

            if (navigator.vibrate) navigator.vibrate(10);
        }

        function init() {
            const container = Utils.get('stitch-mobile-player');
            if (!container) return;

            bindEvents();
            renderPlaylistSheet('all');

            // Sincronizar track inicial si MusicPlayer ya tiene cargado uno
            const currentTrack = MusicPlayer.getCurrentTrack();
            if (currentTrack) {
                updateTrack(currentTrack, MusicPlayer.getCurrentIndex());
            }

            // Pestaña inicial desde URL (si existe) o por defecto 'player'
            const urlParams = new URLSearchParams(window.location.search);
            const tabParam = urlParams.get('tab');
            if (tabParam && ['player', 'photos', 'songs', 'letter'].includes(tabParam)) {
                switchTab(tabParam);
            } else {
                switchTab('player');
            }

            // Parámetros de prueba para inspección visual automatizada
            if (window.location.href.includes('test=slide1')) {
                setTimeout(() => window.MobileTimeCounterSlider && window.MobileTimeCounterSlider.goTo(1, false), 250);
            } else if (window.location.href.includes('test=slide2')) {
                setTimeout(() => window.MobileTimeCounterSlider && window.MobileTimeCounterSlider.goTo(2, false), 250);
            } else if (window.location.href.includes('test=library')) {
                openPlaylistSheet();
            } else if (window.location.href.includes('test=open_card')) {
                const card = document.querySelector('.card');
                if (card) ModalManager.openSongModal(card);
            } else if (window.location.href.includes('test=arruinarlo')) {
                MusicPlayer.playTrackByTitle("Arruinarlo Todo");
            } else if (window.location.href.includes('test=notitas')) {
                MusicPlayer.playTrackByTitle("Arruinarlo Todo");
                openLyricsSheet();
            } else if (window.location.href.includes('test=letter_tap1')) {
                setTimeout(() => Utils.get('mobile-hero-envelope-btn')?.click(), 300);
            } else if (window.location.href.includes('test=letter_tap2')) {
                setTimeout(() => {
                    Utils.get('mobile-hero-envelope-btn')?.click();
                    setTimeout(() => Utils.get('mobile-hero-envelope-btn')?.click(), 400);
                }, 300);
            } else if (window.location.href.includes('test=letter_open')) {
                setTimeout(() => {
                    Utils.get('mobile-hero-envelope-btn')?.click();
                    setTimeout(() => Utils.get('mobile-hero-envelope-btn')?.click(), 400);
                    setTimeout(() => Utils.get('mobile-hero-envelope-btn')?.click(), 800);
                }, 300);
            }
        }

        function bindEvents() {
            // Controles de Reproducción
            const heroPlay = Utils.get('mobile-hero-play');
            if (heroPlay) heroPlay.addEventListener('click', () => MusicPlayer.togglePlay());

            const miniPlay = Utils.get('mobile-mini-play-btn');
            if (miniPlay) miniPlay.addEventListener('click', (e) => {
                e.stopPropagation();
                MusicPlayer.togglePlay();
            });

            const nextBtn = Utils.get('mobile-next-btn');
            if (nextBtn) nextBtn.addEventListener('click', () => {
                if (state.isShuffle) playRandomTrack();
                else MusicPlayer.changeTrack(1);
            });

            const prevBtn = Utils.get('mobile-prev-btn');
            if (prevBtn) prevBtn.addEventListener('click', () => MusicPlayer.changeTrack(-1));

            // Shuffle toggle
            const shuffleBtn = Utils.get('mobile-shuffle-btn');
            if (shuffleBtn) {
                shuffleBtn.addEventListener('click', () => {
                    state.isShuffle = !state.isShuffle;
                    shuffleBtn.classList.toggle('active', state.isShuffle);
                    if (navigator.vibrate) navigator.vibrate(10);
                });
            }

            // Repeat toggle
            const repeatBtn = Utils.get('mobile-repeat-btn');
            if (repeatBtn) {
                repeatBtn.addEventListener('click', () => {
                    const isLooping = MusicPlayer.toggleRepeat();
                    state.isRepeat = isLooping;
                    repeatBtn.classList.toggle('active', state.isRepeat);
                    if (navigator.vibrate) navigator.vibrate(10);
                });
            }

            // Favorito / Corazón
            const heartBtn = Utils.get('mobile-heart-btn');
            if (heartBtn) {
                heartBtn.addEventListener('click', () => {
                    const track = MusicPlayer.getCurrentTrack();
                    if (!track) return;
                    if (state.favorites.has(track.title)) {
                        state.favorites.delete(track.title);
                        heartBtn.classList.remove('is-favorite');
                    } else {
                        state.favorites.add(track.title);
                        heartBtn.classList.add('is-favorite');
                        if (navigator.vibrate) navigator.vibrate([15, 40, 20]);
                    }
                });
            }

            // Barra de progreso y Scrubber
            setupProgressSeek();

            // Navegación en Barra Inferior de Pestañas
            const navBtns = Utils.queryAll('#mobile-bottom-nav .mobile-nav-btn');
            navBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const target = btn.dataset.tab;
                    if (target) switchTab(target);
                });
            });

            // Navegación: Minimizar al Álbum (v) -> Cambia a pestaña Fotos
            const minBtn = Utils.get('mobile-minimize-btn');
            if (minBtn) {
                minBtn.addEventListener('click', () => {
                    switchTab('photos');
                });
            }

            // Mini-barra flotante: Al tocarla o tocar expandir, vuelve a pestaña Reproductor
            const miniBar = Utils.get('mobile-mini-player-bar');
            if (miniBar) {
                miniBar.addEventListener('click', () => {
                    switchTab('player');
                });
            }
            const miniExpand = Utils.get('mobile-mini-expand-btn');
            if (miniExpand) {
                miniExpand.addEventListener('click', (e) => {
                    e.stopPropagation();
                    switchTab('player');
                });
            }

            // Abrir y cerrar Hoja de Playlist (Biblioteca de Canciones)
            const topLibBtn = Utils.get('mobile-top-library-btn');
            if (topLibBtn) topLibBtn.addEventListener('click', openPlaylistSheet);

            const plToggle = Utils.get('mobile-playlist-toggle-btn');
            if (plToggle) plToggle.addEventListener('click', openPlaylistSheet);

            const plSheet = Utils.get('mobile-playlist-sheet');
            const plClose = Utils.get('mobile-close-playlist-sheet');
            const plBackdrop = Utils.get('mobile-playlist-backdrop');

            if (plClose && plSheet) plClose.addEventListener('click', () => plSheet.classList.add('mobile-sheet-hidden'));
            if (plBackdrop && plSheet) plBackdrop.addEventListener('click', () => plSheet.classList.add('mobile-sheet-hidden'));

            // Buscador en la Biblioteca de Canciones
            const plSearchInput = Utils.get('mobile-pl-search-input');
            if (plSearchInput) {
                plSearchInput.addEventListener('input', (e) => {
                    state.searchQuery = e.target.value.trim().toLowerCase();
                    renderPlaylistSheet(state.currentFilter || 'all', state.searchQuery);
                });
            }

            // Tabs de filtro en Playlist sheet
            const plTabs = Utils.queryAll('.mobile-pl-tab');
            plTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    plTabs.forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                    state.currentFilter = tab.dataset.plFilter || 'all';
                    renderPlaylistSheet(state.currentFilter, state.searchQuery || '');
                });
            });

            // Botón alargado: "Notitas :)"
            const notesPillBtn = Utils.get('mobile-notes-pill-btn');
            if (notesPillBtn) notesPillBtn.addEventListener('click', openNotesIfAvailable);

            // Abrir y cerrar Hoja de Dedicatoria ("Notitas :)")
            const lyricsPill = Utils.get('mobile-lyrics-pill');
            const lyricsSheet = Utils.get('mobile-lyrics-sheet');
            const lyricsClose = Utils.get('mobile-close-lyrics-sheet');
            const lyricsBackdrop = Utils.get('mobile-lyrics-backdrop');

            if (lyricsPill && lyricsSheet) {
                lyricsPill.addEventListener('click', () => {
                    const track = MusicPlayer.getCurrentTrack();
                    if (!track) return;
                    const hasStory = Boolean(AppConfig.MODAL_STORIES && AppConfig.MODAL_STORIES[track.title] && AppConfig.MODAL_STORIES[track.title].trim());
                    if (hasStory) openLyricsSheet();
                });
            }
            if (lyricsClose && lyricsSheet) lyricsClose.addEventListener('click', () => lyricsSheet.classList.add('mobile-sheet-hidden'));
            if (lyricsBackdrop && lyricsSheet) lyricsBackdrop.addEventListener('click', () => lyricsSheet.classList.add('mobile-sheet-hidden'));

            // Botón de Tema / Skin Kawaii (Icono de Polo) -> ¡Silencioso, sin toast de texto!
            const themeBtn = Utils.get('mobile-theme-toggle-btn');
            if (themeBtn) themeBtn.addEventListener('click', cycleTheme);
        }

        function playRandomTrack() {
            const playlist = MusicPlayer.getPlaylist();
            if (!playlist || playlist.length <= 1) return;
            let current = MusicPlayer.getCurrentIndex();
            let randIdx = current;
            while (randIdx === current) {
                randIdx = Math.floor(Math.random() * playlist.length);
            }
            MusicPlayer.loadTrack(randIdx);
        }

        function setupProgressSeek() {
            const trackBar = Utils.get('mobile-progress-track');
            if (!trackBar) return;

            const handleSeek = (e) => {
                const rect = trackBar.getBoundingClientRect();
                const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                let percent = (clientX - rect.left) / rect.width;
                percent = Math.max(0, Math.min(1, percent));
                MusicPlayer.seekTrack(percent);
            };

            trackBar.addEventListener('click', handleSeek);
            trackBar.addEventListener('touchstart', (e) => {
                state.isDraggingSeek = true;
                handleSeek(e);
            }, {passive: true});
            trackBar.addEventListener('touchmove', (e) => {
                if (state.isDraggingSeek) handleSeek(e);
            }, {passive: true});
            trackBar.addEventListener('touchend', () => {
                state.isDraggingSeek = false;
            });
        }

        function updateTrack(track, index) {
            if (!track) return;
            const cover = Utils.get('mobile-cover-img');
            const songName = Utils.get('mobile-song-name');
            const artist = Utils.get('mobile-artist-name');
            const tag = Utils.get('mobile-track-tag');
            const preview = Utils.get('mobile-lyrics-preview');
            const heartBtn = Utils.get('mobile-heart-btn');

            if (cover) cover.src = track.img || 'imagenes/albumes/default_cover.jpg';
            if (songName) songName.textContent = track.title;
            if (artist) artist.textContent = track.artist || "Desconocido";
            if (tag) tag.textContent = "Dreamy Pastel Lofi • Track " + String(index + 1).padStart(2, '0');

            // Favorito sync
            if (heartBtn) {
                heartBtn.classList.toggle('is-favorite', state.favorites.has(track.title));
            }

            // Píldora inferior: muestra únicamente el nombre de la canción
            if (preview) {
                preview.textContent = track.title;
            }

            // Botón Alargado "Notitas :)": solo activo si la canción tiene dedicatoria escrita, en el resto gris
            const hasStory = Boolean(AppConfig.MODAL_STORIES && AppConfig.MODAL_STORIES[track.title] && AppConfig.MODAL_STORIES[track.title].trim());
            const notesBtn = Utils.get('mobile-notes-pill-btn');
            const notesStatus = Utils.get('mobile-notes-btn-status');
            const notesArrow = Utils.get('mobile-notes-btn-arrow');

            if (notesBtn) {
                if (hasStory) {
                    notesBtn.classList.remove('is-disabled');
                    notesBtn.removeAttribute('disabled');
                    notesBtn.title = `Toca para leer la notita de "${track.title}"`;
                    if (notesStatus) notesStatus.textContent = "Leeme amorcito";
                    if (notesArrow) notesArrow.style.display = 'inline-block';
                } else {
                    notesBtn.classList.add('is-disabled');
                    notesBtn.setAttribute('disabled', 'true');
                    notesBtn.title = "Esta canción aún no tiene notita escrita";
                    if (notesStatus) notesStatus.textContent = "Sin notita";
                    if (notesArrow) notesArrow.style.display = 'none';
                }
            }

            // Mini-barra flotante
            const miniCover = Utils.get('mobile-mini-cover');
            const miniTitle = Utils.get('mobile-mini-title');
            const miniArtist = Utils.get('mobile-mini-artist');
            if (miniCover) miniCover.src = track.img || 'imagenes/albumes/default_cover.jpg';
            if (miniTitle) miniTitle.textContent = track.title;
            if (miniArtist) miniArtist.textContent = track.artist || "Desconocido";

            highlightCurrentInSheet();
        }

        function updatePlayState(isPlaying) {
            const heroIcon = Utils.get('mobile-hero-play-icon');
            const miniIcon = Utils.get('mobile-mini-play-icon');
            const iconName = isPlaying ? 'pause' : 'play';

            if (heroIcon) {
                heroIcon.setAttribute('data-lucide', iconName);
            }
            if (miniIcon) {
                miniIcon.setAttribute('data-lucide', iconName);
            }
            if (window.lucide) lucide.createIcons();
            highlightCurrentInSheet();
        }

        function updateProgress(currentTime, duration) {
            if (!duration) return;
            const fill = Utils.get('mobile-progress-fill');
            const curTime = Utils.get('mobile-cur-time');
            const durTime = Utils.get('mobile-dur-time');

            const percent = (currentTime / duration) * 100;
            if (fill) fill.style.width = percent + '%';
            if (curTime) curTime.textContent = Utils.formatTime(currentTime);
            if (durTime) durTime.textContent = Utils.formatTime(duration);
        }

        function openPlaylistSheet() {
            const sheet = Utils.get('mobile-playlist-sheet');
            if (sheet) {
                renderPlaylistSheet(state.currentFilter || 'all', state.searchQuery || '');
                sheet.classList.remove('mobile-sheet-hidden');
                highlightCurrentInSheet();
                if (window.MobileHistoryManager) MobileHistoryManager.pushModalState('playlist-sheet');
                if (window.lucide) lucide.createIcons();
            }
            if (navigator.vibrate) navigator.vibrate(10);
        }

        function openNotesIfAvailable() {
            const track = MusicPlayer.getCurrentTrack();
            if (!track) return;
            const hasStory = Boolean(AppConfig.MODAL_STORIES && AppConfig.MODAL_STORIES[track.title] && AppConfig.MODAL_STORIES[track.title].trim());
            if (hasStory) {
                openLyricsSheet();
                if (navigator.vibrate) navigator.vibrate(12);
            }
        }

        function cycleTheme() {
            const screen = Utils.get('stitch-mobile-player');
            const themes = ['theme-sky', 'theme-pink', 'theme-lavender', 'theme-mint'];
            themes.forEach(t => screen && screen.classList.remove(t));
            state.themeIndex = ((state.themeIndex || 0) + 1) % themes.length;
            const nextTheme = themes[state.themeIndex];
            if (screen) screen.classList.add(nextTheme);
            if (navigator.vibrate) navigator.vibrate([15, 25, 15]);
        }

        function openLyricsSheet() {
            const sheet = Utils.get('mobile-lyrics-sheet');
            if (!sheet) return;
            const track = MusicPlayer.getCurrentTrack();
            if (!track) return;

            const cover = Utils.get('mobile-sheet-cover');
            const title = Utils.get('mobile-sheet-title');
            const artist = Utils.get('mobile-sheet-artist');
            const body = Utils.get('mobile-sheet-story-content');

            if (cover) cover.src = track.img || 'imagenes/albumes/default_cover.jpg';
            if (title) title.textContent = track.title;
            if (artist) artist.textContent = track.artist || "Desconocido";

            let storyText = (AppConfig.MODAL_STORIES && AppConfig.MODAL_STORIES[track.title]) ? AppConfig.MODAL_STORIES[track.title].trim() : '';
            if (body) {
                if (storyText) {
                    const safe = storyText.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
                    body.innerHTML = safe.split(/\n{2,}/).map(p => `<p>${p.trim().replace(/\n/g, '<br>')}</p>`).join('');
                } else {
                    body.innerHTML = `<div style="text-align: center; color: #94a3b8; padding: 25px 10px;">
                        <p style="font-size: 24px; margin-bottom: 6px;">☁️✨</p>
                        <p style="font-weight: 600; color: #64748b; margin-bottom: 4px;">Escuchando "${track.title}" juntos</p>
                        <p style="font-size: 13px;">Aún estamos escribiendo el recuerdo perfecto para esta canción...</p>
                    </div>`;
                }
            }
            sheet.classList.remove('mobile-sheet-hidden');
            if (window.MobileHistoryManager) MobileHistoryManager.pushModalState('lyrics-sheet');
            if (window.lucide) lucide.createIcons();
        }

        function renderPlaylistSheet(filter = 'all', query = '') {
            const container = Utils.get('mobile-playlist-items-list');
            if (!container) return;
            container.innerHTML = '';

            const cards = Utils.queryAll('.cards-container .card');
            const currentTrack = MusicPlayer.getCurrentTrack();
            const normalizedQuery = (query || '').toLowerCase().trim();

            let matchCount = 0;

            cards.forEach(card => {
                const title = card.dataset.title || '';
                const subtitle = card.dataset.subtitle || '';
                const img = card.querySelector('img') ? card.querySelector('img').src : '';
                const column = card.closest('.timeline-column');
                const isPast = column && column.classList.contains('left');

                if (filter === 'past' && !isPast) return;
                if (filter === 'present' && isPast) return;

                if (normalizedQuery) {
                    const matchTitle = title.toLowerCase().includes(normalizedQuery);
                    const matchSubtitle = subtitle.toLowerCase().includes(normalizedQuery);
                    if (!matchTitle && !matchSubtitle) return;
                }

                matchCount++;

                const isCurrent = currentTrack && MusicPlayer.isCurrentTrack(title);
                const isPlaying = isCurrent && MusicPlayer.isPlaying();
                const hasStory = Boolean(AppConfig.MODAL_STORIES && AppConfig.MODAL_STORIES[title] && AppConfig.MODAL_STORIES[title].trim());

                const item = Utils.createEl('div', 'mobile-pl-item');
                if (isCurrent) item.classList.add('playing');
                item.dataset.songTitle = title;

                item.innerHTML = `
                    <img src="${img}" class="mobile-pl-thumb" onerror="this.src='https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=400'" alt="${title}">
                    <div class="mobile-pl-info">
                        <div class="mobile-pl-title-row">
                            <span class="mobile-pl-title">${title}</span>
                            ${hasStory ? '<span class="mobile-pl-note-tag">💌 Notita</span>' : ''}
                        </div>
                        <div class="mobile-pl-meta-row">
                            <span class="mobile-pl-artist">${subtitle || 'Desconocido'}</span>
                            <span class="mobile-pl-cat-tag ${isPast ? 'tag-past' : 'tag-present'}">${isPast ? 'Pasado' : 'Presente'}</span>
                        </div>
                    </div>
                    ${isPlaying ? '<div class="mobile-pl-playing-badge"><i data-lucide="volume-2" class="w-4 h-4"></i></div>' : '<i data-lucide="play" class="w-4 h-4 mobile-pl-play-icon"></i>'}
                `;

                item.addEventListener('click', () => {
                    MusicPlayer.playTrackByTitle(title, img, subtitle);
                    const sheet = Utils.get('mobile-playlist-sheet');
                    if (sheet) sheet.classList.add('mobile-sheet-hidden');
                    if (navigator.vibrate) navigator.vibrate(15);
                });

                container.appendChild(item);
            });

            if (matchCount === 0) {
                container.innerHTML = `
                    <div style="text-align: center; color: #94a3b8; padding: 30px 10px;">
                        <p style="font-size: 26px; margin-bottom: 6px;">🔍☁️</p>
                        <p style="font-weight: 700; color: #64748b; font-size: 13px;">No se encontraron canciones</p>
                    </div>
                `;
            }

            if (window.lucide) lucide.createIcons();
        }

        function highlightCurrentInSheet() {
            const currentTrack = MusicPlayer.getCurrentTrack();
            if (!currentTrack) return;
            const items = Utils.queryAll('.mobile-pl-item');
            items.forEach(item => {
                const isCurrent = MusicPlayer.isCurrentTrack(item.dataset.songTitle);
                item.classList.toggle('playing', isCurrent);
            });
        }

        function showToast(msg) {
            // Silenciado: el usuario eliminó todos los mensajes emergentes / toasts
        }

        return {
            init,
            updateTrack,
            updatePlayState,
            updateProgress,
            openPlaylistSheet,
            openLyricsSheet,
            openNotesIfAvailable,
            cycleTheme,
            switchTab
        };
    })();
    window.CinnamorollMobilePlayer = CinnamorollMobilePlayer;

    const MobileHistoryManager = (function() {
        let isHandlingPop = false;

        function pushModalState(modalName) {
            try {
                history.pushState({ modal: modalName }, '');
            } catch(e) {}
        }

        function pushTabState(tabName) {
            try {
                if (tabName !== 'player') {
                    history.pushState({ tab: tabName }, '');
                }
            } catch(e) {}
        }

        function closeAnyOpenModal() {
            // 1. Modal de Canción / Polaroid
            const modal = Utils.get('modal');
            if (modal && modal.classList.contains('show')) {
                Utils.toggleDisplay(modal, false);
                return true;
            }

            // 2. Modal de Edición
            const editModal = Utils.get('card-edit-modal');
            if (editModal && editModal.classList.contains('show')) {
                Utils.toggleDisplay(editModal, false);
                return true;
            }

            // 3. Modal del Minijuego Arcade
            const arcadeModal = Utils.get('arcade-game-modal');
            if (arcadeModal && arcadeModal.classList.contains('show')) {
                Utils.toggleDisplay(arcadeModal, false);
                Utils.toggleDisplay(Utils.get('diff-selector-container'), false);
                if (typeof SnakeGame !== 'undefined' && SnakeGame.stop) SnakeGame.stop();
                return true;
            }

            // 4. Overlay de Carta
            const introOverlay = Utils.get('intro-overlay');
            if (introOverlay && !introOverlay.classList.contains('hidden')) {
                introOverlay.classList.add('hidden');
                if (typeof EnvelopeAnimation !== 'undefined' && EnvelopeAnimation.reset) EnvelopeAnimation.reset();
                return true;
            }

            // 5. Hoja de Biblioteca de Canciones (Playlist)
            const plSheet = Utils.get('mobile-playlist-sheet');
            if (plSheet && !plSheet.classList.contains('mobile-sheet-hidden')) {
                plSheet.classList.add('mobile-sheet-hidden');
                return true;
            }

            // 6. Hoja de Notita / Dedicatoria (Lyrics)
            const lySheet = Utils.get('mobile-lyrics-sheet');
            if (lySheet && !lySheet.classList.contains('mobile-sheet-hidden')) {
                lySheet.classList.add('mobile-sheet-hidden');
                return true;
            }

            return false;
        }

        function init() {
            try {
                history.replaceState({ app: 'nuestro-album', tab: 'player' }, '');
            } catch(e) {}

            window.addEventListener('popstate', () => {
                isHandlingPop = true;

                // 1. Si hay cualquier modal o panel emergente abierto, cerrarlo
                const closedModal = closeAnyOpenModal();
                if (closedModal) {
                    isHandlingPop = false;
                    return;
                }

                // 2. Si no hay modal abierto y estamos en fotos, canciones o carta: volver al reproductor
                const currentTab = document.body.dataset.mobileTab || 'player';
                if (currentTab !== 'player') {
                    if (window.CinnamorollMobilePlayer) {
                        window.CinnamorollMobilePlayer.switchTab('player', false);
                    }
                    isHandlingPop = false;
                    return;
                }

                isHandlingPop = false;
            });
        }

        return {
            init,
            pushModalState,
            pushTabState
        };
    })();
    window.MobileHistoryManager = MobileHistoryManager;

    // --- INICIALIZACIÓN PRINCIPAL ---
    document.addEventListener('DOMContentLoaded', () => {
        MobileHistoryManager.init();
        TimeCounters.init(); ImageCarousel.init(); CalendarWidget.init(); ParticleSystem.init();
        ModalManager.init(); MusicPlayer.init(); EnvelopeAnimation.init(); DesignTools.init();
        CardEditor.init(); ModalStickerController.init(); CinnamorollMobilePlayer.init();
        MobileTimeCounterSlider.init();
        if (window.lucide) lucide.createIcons();
    });
})();




