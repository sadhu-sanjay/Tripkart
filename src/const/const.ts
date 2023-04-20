
type CSSProps = {
    scrollbarWidth?: 'thin' | 'none' | 'auto'
    children?: React.ReactNode
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
    alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch'
    overflow?: 'visible' | 'hidden' | 'scroll' | 'auto' | 'initial' | 'inherit'
    flex?: string
    order?: number
    flexGrow?: number
    flexShrink?: number
    alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
    width?: string
    height?: string
    margin?: string
    padding?: string
    backgroundColor?: string
    boxSizing?: 'content-box' | 'border-box'
}

export default CSSProps
