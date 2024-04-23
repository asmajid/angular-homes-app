export interface HousingLocation {
  id: number
  name: string
  city: string
  state: string
  address: string;
  longitude: number;
  latitude: number;
  photo: string
  availableUnits: number
  wifi: boolean
  laundry: boolean
}
