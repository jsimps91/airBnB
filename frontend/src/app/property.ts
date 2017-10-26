export class Property {
    constructor(
        public title = '',
        public description = '', 
        public photos = [],
        public _user = null,
        public _id = null, 
        public price = null, 
        public placeType = '', 
        public rentalType = '', 
        public accomodates = 0,
        public beds = 0,
        public baths = 0,
        public streetNumber = '',
        public streetName = '',
        public city = '',
        public state = '',
        public country = '',
        public lat = 0,
        public long = 0, 
    ){}
}
