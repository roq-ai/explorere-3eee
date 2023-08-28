import { OrderInterface } from 'interfaces/order';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface CarInterface {
  id?: string;
  make: string;
  model: string;
  year: number;
  color: string;
  price_per_day: number;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  order?: OrderInterface[];
  organization?: OrganizationInterface;
  _count?: {
    order?: number;
  };
}

export interface CarGetQueryInterface extends GetQueryInterface {
  id?: string;
  make?: string;
  model?: string;
  color?: string;
  organization_id?: string;
}
