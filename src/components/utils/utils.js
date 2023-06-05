export const adjustText = (text, infos) => {
    let result = text
    Object.keys(infos).forEach((key) => {
      result = String(result).replaceAll(`{{${key}}}`, String(infos[key]));
    });
    return result
}

export const PaginateTotal = ({
    total,
    totalPerPage
  }) => {
    const totalPage = total / totalPerPage
    if (Number.isInteger(totalPage)) {
        return totalPage
    } else {
        return parseInt(total / totalPerPage) + 1
    }
}

export const paramsApi = e => {
    let params = ``
    if (e) {
      params = `?`
      Object.keys(e).map((par)=> {
        params = `${params === '?' ? params : params + '&'}${par}=${e[par]}`
      })
    }
    return params
  }