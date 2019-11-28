    _agregar(nuevo){
    if(this._inicio == null){
     this._inicio = nuevo;
    }
    else{
         if(nuevo.priority > this._inicio.priority){
             nuevo.siguiente = this._inicio;
             this._inicio = nuevo;
         }else{
              _agregar(nuevo, this._inicio);
         }
     }
 }
 _agregarNodo(nuevo, viejo){
    if(nuevo.priority > viejo.priority){
         nuevo.siguiente = viejo;
         r=this._inicio;
         while(r.siguiente != viejo){
             r=r.siguiente;
         }
         r.siguiente=nuevo;
    }
    else{
        if(viejo.siguiente==null){
            viejo.siguiente=nuevo;
        }
        else{
            _agregarNodo(nuevo, viejo.siguiente)
        }
    }
 }
}
