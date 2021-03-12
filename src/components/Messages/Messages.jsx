import React from 'react'
import cls from './Messages.module.css'

function Messages(props){
    return(
        <div className={cls.dialogs}>
            <div className={cls.dialogs__items}>
                <div className={`${cls.dialogs__item} ${cls.active}`}>
                    Dima
                </div>
                <div className={cls.dialogs__item}>
                    Andrey
                </div>
                <div className={cls.dialogs__item}>
                    Jora
                </div>
                <div className={cls.dialogs__item}>
                    Igor
                </div>
                <div className={cls.dialogs__item}>
                    Sasha
                </div>
                <div className={cls.dialogs__item}>
                    David
                </div>
            </div>
            <div className={cls.messages}>
                <div className={cls.message}>Hello</div>
                <div className={cls.message}>Hi</div>
                <div className={cls.message}>Hey</div>
                <div className={cls.message}>Hola</div>
                <div className={cls.message}>Yo</div>
            </div>
        </div>
    )
}

export default Messages
