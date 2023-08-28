const mapping: Record<string, string> = {
  cars: 'car',
  invitations: 'invitation',
  orders: 'order',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
