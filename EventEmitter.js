function EventEmitter(){
    var map = new Object;    
    var listenernum = new Object;    
    this.on = function(eventname, listener){
        if (map[eventname]) 
            ;
        else 
            map[eventname] = new Object;
        
        if (listenernum[eventname]) 
            ;
        else 
            listenernum[eventname] = "1";
        var num = listenernum[eventname] = parseInt(listenernum[eventname]) + 1 + "";
        map[eventname][num] = listener;
        return num;
    }
    this.removeListener = function(eventname, listenernum){
        delete map[eventname][listenernum];
    }
    this.removeAllListener = function(eventname){
        delete map[eventname];
    }
    this.listeners = function(eventname){
        return map[eventname];
    }
    this.emit = function(eventname){
    
        var args = new Array;
        
        for (var i = 0; i < arguments.length - 1; i++) {
            args[i] = arguments[i + 1];
        }
        
        for (var key in map[eventname]) {
            var func = map[eventname][key];
            func.apply(this, args);
        }
    }
}
