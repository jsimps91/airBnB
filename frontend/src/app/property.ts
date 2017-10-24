export class Property {
    constructor(
        public title = '',
        public description = '', 
        public photos = [],
        public _user = null,
        public _id = null, 
        public price = null, 
        public place_type = '', 
        public rental_type = '', 
        public accomodates = 0,
        public beds = 0,
        public baths = 0,
        public address = '',
        public city = '',
        public country = ''
    ){}
}
