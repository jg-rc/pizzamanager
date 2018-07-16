import React, { Component } from 'react';

/**
 * 
 * Home class component in charge of showing welcome message
 *
 *
 */
class Home extends Component { 
    render() { 
        return (<div>
            <h1>Nunca fue mas facil administrar tus ordenes</h1>
            <div>
                <p>
                pizza admin es el aplicativo que te permitira administrar tus ordenes de una manera facil, de esta forma nunca olvidaras una orden...por que no hay nada peor que una pizza fria  <span aria-label="asustado" role="img">🤕</span>.
                    
                </p>
            </div>
            <div className="instruction">
                <div className="title-instruction">Acciones</div>
                <p>
                las acciones disponibles las encuentras en el menu superior
                <img alt="animacion de ayuda" className="home-image" src="/images/actions.gif" />
                </p>
            </div>
            <div className="instruction">
                <div className="title-instruction">Listado</div>
                <p>
                pizza admin te muestra tus ordenes en formato de tarjeta, asi puedes ver muchas ordenes a la vez y no perderlas de vista.
                <img alt="animacion de ayuda" className="home-image" src="/images/cards.png" />
                </p>
            </div>
            <div className="instruction">
                <div className="title-instruction">Paginacion</div>
                <p>
                te mostramos un maximo de 6 ordenes ! <span aria-label="asustado" role="img">😨</span> pero no te preocupes... puedes acceder a la paginacion en la parte inferior para asi ver las ordenes siguientes
                <img alt="animacion de ayuda" className="home-image" src="/images/pagination.gif" />
                </p>
            </div>
            <div className="instruction">
                <div className="title-instruction">Edicion</div>
                <p>
                 alguien cambio de opinion y ahora quiere una pizza mas grande no hay problema <span aria-label="sonrisa" role="img">😊</span> te permitimos editar las ordenes existentes
                <img alt="animacion de ayuda"className="home-image" src="/images/update.gif" />
                </p>
            </div>
            <div className="instruction">
                <div className="title-instruction">Creacion</div>
                <p>
                 el proceso de creacion es bastante simple, no te preocupes validamos todos los datos ingresados
                <img alt="animacion de ayuda"className="home-image" src="/images/validation.gif" />
                </p>
            </div>
            <div className="instruction">
                <div className="title-instruction">Eliminacion</div>
                <p>
                 alguien se arrepintio y ya no quiere su pizza <span aria-label="triste" role="img">😟</span>, no hay problema puedes eliminar ordenes de una manera muy sencilla
                <img alt="animacion de ayuda" className="home-image" src="/images/delete.gif" />
                </p>
            </div>
        </div>)
    }
}
export default Home