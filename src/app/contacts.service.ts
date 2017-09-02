import { Injectable } from '@angular/core';

interface IContact {
  name: string,
  number: string
}

@Injectable()
export class ContactsService {

  constructor() { }
  getContactList() {
    let contacts: IContact[] = [
      {
        name: 'sanchit',
        number: '9638792002'
      },
      {
        name: 'nitin',
        number: '96387654732'
      },
      {
        name: 'siddhart',
        number: '495304545'
      },
      {
        name: 'random',
        number: '34534543'
      },
      {
        name: 'random1',
        number: '234253345'
      },
    ]

    return contacts;
  }
}
