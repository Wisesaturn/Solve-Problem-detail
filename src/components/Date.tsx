import { format, parseISO } from 'date-fns'

interface Date_Type {
    dateString : string,
    theme : string
}

const Date = ({ dateString, theme } : Date_Type) => {
    const date = parseISO(dateString)
    if (theme === 'category')
     { return <time dateTime={dateString}>{format(date, 'MM/dd, yyyy')} </time> }
    else if (theme === 'post')
     { return <time dateTime={dateString}>{format(date, 'yyyy-MM-dd hh:mm')} </time> }
}

export default Date
