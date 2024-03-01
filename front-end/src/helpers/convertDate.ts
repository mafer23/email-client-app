export const convertDate = ( valueDate: Date ): string => {
  
    const createdDate = new Date( valueDate );
    const formattedDate = createdDate.toLocaleString();

    return formattedDate;

}
