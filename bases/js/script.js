function handleFormChange(idList, obj) {
  const elementList = idList.map(id => document.getElementById(id));

  elementList.forEach(element => {
    element.onchange = () => {
      const isEmpty = elementList.find(element => element.value === '');
      
      if (isEmpty) {
        obj.onNotValid();
      }
      else {
        obj.onValid();
      }
    }
  })
}