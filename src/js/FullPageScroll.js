export default class FullPageScroll {
    constructor(options) {
        
        this.section = document.querySelector(options.section);
        
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
        this.counter = 0;
        this.step = 100;
        
        // functions
        //this._goTo(index);
        this._init();
        
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
        if (e.deltaY > 0) {
            this._moveUp();
            //this.counter++;
            //console.log(this.counter);
        }
        else {
            this._moveDown();
            //this.counter--;
            //console.log(this.counter);
        }
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