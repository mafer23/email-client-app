export const convertDate = ( valueDate: Date ) => {
  
    const createdDate = new Date( valueDate );
    const formattedDate = createdDate.toLocaleString();

    return formattedDate;

}
