export interface Moment {

  id?: Number;
  title:  string ;
  description: string;
  image: string;
  created_at?: string;
  update?: string;
  comments?: [{text: string, username: string}];

}
