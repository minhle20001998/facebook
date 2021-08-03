const months = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"];

export const generateDays = () => {
    let day_options = [];
    for (let i = 1; i < 32; i++) {
        day_options.push(<option value={`${i}`}>{i}</option>)
    }
    return day_options;
}

export const generateMonths = () => {
    let month_options = [];
    for (let i = 0; i < 12; i++) {
        month_options.push(<option value={`${i + 1}`}>{months[i]}</option>)
    }
    return month_options;
}

export const generateYears = () => {
    let year_options = [];
    let currYear = new Date().getFullYear();
    for (let i = currYear; i >= 1905; i--) {
        year_options.push(<option value={`${i}`}>{i}</option>)
    }
    return year_options;
}

export const caculateTimePost = (date) => {
    const postDate = new Date(date);
    const currentDate = new Date();
    const diff = (currentDate.getTime() / 1000) - (postDate.getTime() / 1000)
    if (diff <= 60) {
        return 'Just now';
    } else if (diff > 60 && diff <= 3600) {
        return `${Math.floor(diff / 60)}m`
    } else if (diff > 3600 && diff <= 86400) {
        return `${Math.floor(diff / 3600)}h`
    } else {
        return postDate.toDateString();
    }
}