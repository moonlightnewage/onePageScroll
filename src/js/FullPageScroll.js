export default class FullPageScroll {
    constructor(options) {
        
        this.section = document.querySelectorAll(options.section);
        
        // navigation
        this.nav = options.nav;
        this.navPosition = options.navPosition;
        this.navBox = options.navBox;
        this.activePageNumber = options.activePage;
        
        // controls
        this.controlPrev = options.controlPrev;
        this.controlNext = options.controlNext;
        
        // scroll
        this.scrollingSpeed = options.scrollingSpeed;
        this.beforeScroll = options.beforeScroll;
        this.afterScroll = options.afterScroll;
        
        // helpers
        
        // functions
        //this._goTo(index);
        this._init();
        
    }
    
    _init() {
        this._makeActive(this.activePageNumber);
        document.addEventListener('wheel', this._scrollActions.bind(this));
    }
    
    _makeActive(index) {
        for (let i = 0; i < this.section.length; i++) {
            this.section[i].children[index - 1].classList.add('is-active');
        }
    }
    
    _scrollActions() {
        this.activePage;
        this._findActive();
        this._moveUp();
    }
    
    _findActive() {
        for (let i = 0; i < this.section.length; i++) {
            for (let j = 0; j < this.section[i].children.length; j++) {
                let isActive = this.section[i].children[j].classList.contains('is-active');

                if (isActive) {
                    this.activePage = this.section[i].children[j];
                }
            }
        }
    }
    
    _moveUp() {
        this.activePage.style.top = '-100%';
    }
    
}