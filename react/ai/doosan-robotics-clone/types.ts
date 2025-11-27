import React from 'react';

export interface UseCase {
  id: string;
  category: string;
  title: string;
  description?: string;
  imageUrl: string;
  tag: string;
}

export interface Product {
  id: string;
  series: string;
  name: string;
  description: string;
  imageUrl: string;
  models: string[];
  type: 'High-Power' | 'Masterpiece' | 'Agile' | 'Edge';
}

export interface SupportItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}