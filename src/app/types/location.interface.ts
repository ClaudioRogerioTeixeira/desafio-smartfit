export interface Location {
  id: number,
  title: string,
  content: string,
  opened: boolean,
  mask: string,
  towel: string, // toalha
  fountain: string, // bebedouro
  locker_room: string
  schedule: Schedule[]
}

interface Schedule {
  weekdays: string,
  hour: string
}
