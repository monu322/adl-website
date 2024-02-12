// let's make a function that receive the specific element_id as string and scroll into that element_id
export const scrolltoHash = function (element_id) {
    
    const element = document.getElementById(element_id)
    console.log(element)
    console.log(element.offsetTop)

    const scrollTop = element.offsetTop
    
    if(window)
    {
        window.scrollTo({
            top: scrollTop-150,
            behavior: 'smooth',
        })
    }

    return false;

  }