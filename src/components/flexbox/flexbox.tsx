import React from 'react'
import { CSSProps } from '../../const/const'

function Flexbox({ backgroundColor, overflow, children, flexDirection, flexWrap, justifyContent, alignItems, alignContent, flex, order, 
                                flexGrow, flexShrink, alignSelf, width, height, margin, padding }: FlexboxProps) {

    const style = {
        container: {
            display: 'flex',
            flexDirection: flexDirection,
            flexWrap: flexWrap,
            justifyContent: justifyContent,
            alignItems: alignItems,
            width: width,
            height: height ? height : '100%',
            margin: margin,
            padding: padding,
            backgroundColor: backgroundColor ? backgroundColor : 'red',
            boxSizing: 'border-box',
            overflow: overflow,
            flexShrink: 0,
        }
    }

    return (
      <div style={style.container}>
        {children}
      </div>
    )
}

export { Flexbox }

