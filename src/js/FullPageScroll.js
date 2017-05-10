export default class FullPageScroll {
    constructor(options) {
        
        this.section = document.querySelector(options.section);
        
        if (this.section) {
            // navigation
            this.nav = options.nav;
            this.navPosition = options.navPosition;
            this.navBox = options.navBox;
            this.activePageNumber = options.activePage;
            this.animationTime = options.animationTime;

            // controls
            this.controlPrev = options.controlPrev;
            this.controlNext = options.controlNext;

            // scroll
            this.scrollingSpeed = options.scrollingSpeed;
            this.beforeScroll = options.beforeScroll;
            this.afterScroll = options.afterScroll;

            // helpers
            this.counter = 0;
            this.step = 100;
            this.lastAnimation = 0;

            // functions
            //this._goTo(index);
            this._init();
        }

        
    }
    
    _init() {
        this._createDom();
        this._makeActive(this.activePageNumber);
        this._findActive();
        
        document.addEventListener('wheel', this._scrollActions.bind(this));
    }
    
    _createDom() {
        let wrapper = document.createElement('div');
        wrapper.className = 'fullpage-wrapper js-fullpage-wrapper';
        this.section.appendChild(wrapper);
            
        for (let i = 0; i < this.section.childElementCount - 1; i + 1) {
            wrapper.appendChild(this.section.children[i]);
        }
        this.parent = document.querySelector('.js-fullpage-wrapper');
    }
    
    _makeActive(index) {
        this.parent.children[index - 1].classList.add('is-active');
    }
    
    _scrollActions(e) {
        let currentTime = +new Date();
        let quietPeriod = 500;
        console.log(currentTime);
        if (currentTime - this.lastAnimation < quietPeriod + this.animationTime) {
            if (e.deltaY > 0) {
                this._moveUp();
            }
            else {
                this._moveDown();
            }
        }
        
        this.lastAnimation = currentTime;  
    }
    
    _findActive() {
        for (let i = 0; i < this.parent.children.length; i++) {
            let isActive = this.parent.children[i].classList.contains('is-active');

            if (isActive) {
                this.activePage = this.parent.children[i];
            }
        }
        this.activePageIndex = [].indexOf.call(this.parent.children, this.activePage);
    }
    
    _moveUp() {
        //console.log(this.activePageIndex);
        //console.log(this.parent.childElementCount - 1);
        if (this.activePageIndex < this.parent.childElementCount - 1) {
            this.activePage.classList.remove('is-active');
            this.activePage = this.activePage.nextElementSibling;
            this.activePageIndex++;
            this.activePage.classList.add('is-active');
            this.counter++;
            this.parent.style.top = - this.counter * this.step + '%';
        }
    }
    
    _moveDown() {
        if (this.activePageIndex > 0) {
            this.activePage.classList.remove('is-active');
            this.activePage = this.activePage.previousElementSibling;
            this.activePageIndex--;
            this.activePage.classList.add('is-active');
            this.counter--;
            this.parent.style.top = -this.counter * this.step + '%';
        }
    }
    
}