import React, { createContext, useContext, useState, useEffect } from 'react';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  available: boolean;
  preparationTime: string;
  isMostPopular?: boolean;
}

interface MenuContextType {
  menuItems: MenuItem[];
  addMenuItem: (item: Omit<MenuItem, 'id'>) => void;
  updateMenuItem: (id: string, item: Partial<MenuItem>) => void;
  deleteMenuItem: (id: string) => void;
  categories: string[];
  addCategory: (category: string) => void;
  deleteCategory: (category: string) => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export function useMenu() {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
}

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    // BOX Kategorisi
    {
      id: 'box-1',
      name: 'Döner Box mit Kalbfleisch',
      description: 'Frisches Kalbfleisch-Döner mit Salat, Gemüse und ausgewählten Saucen',
      price: 13.00,
      category: 'Box',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
      available: true,
      preparationTime: '10-15 Minuten'
    },
    {
      id: 'box-2',
      name: 'Poulet Box',
      description: 'Zartes Hähnchenfleisch mit Pommes, Salat und verschiedenen Saucen',
      price: 13.00,
      category: 'Box',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
      available: true,
      preparationTime: '12-18 Minuten'
    },
    {
      id: 'box-3',
      name: 'Poulet Box vom Grill',
      description: 'Gegrilltes Hähnchen vom Grill mit frischem Gemüse und Saucen',
      price: 15.00,
      category: 'Box',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
      available: true,
      preparationTime: '15-20 Minuten'
    },
    {
      id: 'box-4',
      name: 'Lamm Box vom Grill',
      description: 'Zartes Lammfleisch vom Grill mit Gemüse und speziellen Gewürzen',
      price: 16.00,
      category: 'Box',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
      available: true,
      preparationTime: '15-20 Minuten'
    },
    {
      id: 'box-5',
      name: 'Chicken Nuggets Box',
      description: 'Knusprige Hähnchennuggets mit Pommes und Saucen',
      price: 13.00,
      category: 'Box',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
      available: true,
      preparationTime: '10-15 Minuten'
    },
    {
      id: 'box-6',
      name: 'Falafel Box',
      description: 'Knusprige Falafel mit Hummus, Salat und Gemüse',
      price: 13.00,
      category: 'Box',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
      available: true,
      preparationTime: '12-18 Minuten'
    },
    {
      id: 'box-7',
      name: 'Pommes Box',
      description: 'Pommes Frites mit verschiedenen Saucen',
      price: 8.00,
      category: 'Box',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
      available: true,
      preparationTime: '5-10 Minuten'
    },
    {
      id: 'box-8',
      name: 'Vegan Box',
      description: 'Vegane Option mit frischem Gemüse, Falafel und veganen Saucen',
      price: 15.00,
      category: 'Box',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
      available: true,
      preparationTime: '12-18 Minuten'
    },
    // PIZZA Kategorisi
    {
      id: 'pizza-1',
      name: 'Pizza Margherita',
      description: 'Klassische Margherita mit Tomatensauce, Mozzarella und frischem Basilikum',
      price: 15.00,
      category: 'Pizza',
      image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=500',
      available: true,
      preparationTime: '15-20 Minuten'
    },
    {
      id: 'pizza-2',
      name: 'Pizza Salami',
      description: 'Tomatensauce, Mozzarella und würzige Salami',
      price: 17.00,
      category: 'Pizza',
      image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=500',
      available: true,
      preparationTime: '15-20 Minuten'
    },
    {
      id: 'pizza-3',
      name: 'Pizza Hawaii',
      description: 'Tomatensauce, Mozzarella, Schinken und Ananas',
      price: 18.00,
      category: 'Pizza',
      image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=500',
      available: true,
      preparationTime: '15-20 Minuten'
    },
    {
      id: 'pizza-4',
      name: 'Pizza Tonno',
      description: 'Tomatensauce, Mozzarella und Thunfisch',
      price: 17.00,
      category: 'Pizza',
      image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=500',
      available: true,
      preparationTime: '15-20 Minuten'
    },
    {
      id: 'pizza-5',
      name: 'Pizza Funghi',
      description: 'Tomatensauce, Mozzarella und frische Champignons',
      price: 17.00,
      category: 'Pizza',
      image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=500',
      available: true,
      preparationTime: '15-20 Minuten'
    },
    {
      id: 'pizza-6',
      name: 'Pizza Vegan',
      description: 'Vegane Pizza mit Gemüse und veganem Käse',
      price: 17.00,
      category: 'Pizza',
      image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=500',
      available: true,
      preparationTime: '15-20 Minuten'
    },
    {
      id: 'pizza-7',
      name: 'Pizza Prosciutto',
      description: 'Tomatensauce, Mozzarella und Prosciutto',
      price: 17.00,
      category: 'Pizza',
      image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=500',
      available: true,
      preparationTime: '15-20 Minuten'
    },
    {
      id: 'pizza-8',
      name: 'Pizza Prosciutto Funghi',
      description: 'Tomatensauce, Mozzarella, Prosciutto und Champignons',
      price: 18.00,
      category: 'Pizza',
      image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=500',
      available: true,
      preparationTime: '15-20 Minuten'
    },
    {
      id: 'pizza-9',
      name: 'Pizza Kebab',
      description: 'Tomatensauce, Mozzarella und gewürztes Dönerfleisch',
      price: 17.00,
      category: 'Pizza',
      image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=500',
      available: true,
      preparationTime: '15-20 Minuten'
    },
    // PIDE Kategorisi
    {
      id: 'pide-1',
      name: 'Pide Käse',
      description: 'Traditionelles Pide mit geschmolzenem Käse',
      price: 15.00,
      category: 'Pide',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=500',
      available: true,
      preparationTime: '12-18 Minuten'
    },
    {
      id: 'pide-2',
      name: 'Pide Spinat und Käse',
      description: 'Pide mit frischem Spinat und geschmolzenem Käse',
      price: 17.00,
      category: 'Pide',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=500',
      available: true,
      preparationTime: '15-20 Minuten'
    },
    {
      id: 'pide-3',
      name: 'Pide Spinat und Käse mit Ei',
      description: 'Pide mit Spinat, Käse und Spiegelei',
      price: 18.00,
      category: 'Pide',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=500',
      available: true,
      preparationTime: '15-20 Minuten'
    },
    {
      id: 'pide-4',
      name: 'Pide Sucuk',
      description: 'Pide mit würziger türkischer Sucuk-Wurst',
      price: 16.00,
      category: 'Pide',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=500',
      available: true,
      preparationTime: '12-18 Minuten'
    },
    {
      id: 'pide-5',
      name: 'Pide Poulet und Gemüse',
      description: 'Pide mit gegrilltem Hähnchen und frischem Gemüse',
      price: 18.00,
      category: 'Pide',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=500',
      available: true,
      preparationTime: '15-20 Minuten'
    },
    {
      id: 'pide-6',
      name: 'Pide Lamm und Gemüse',
      description: 'Pide mit zartem Lammfleisch und Gemüse',
      price: 19.00,
      category: 'Pide',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=500',
      available: true,
      preparationTime: '15-20 Minuten'
    },
    {
      id: 'pide-7',
      name: 'Pide Kebab',
      description: 'Pide mit gewürztem Dönerfleisch und Gemüse',
      price: 17.00,
      category: 'Pide',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=500',
      available: true,
      preparationTime: '12-18 Minuten'
    },
    {
      id: 'pide-8',
      name: 'Pide Gemüse',
      description: 'Veganes Pide mit frischem Gemüse und Kräutern',
      price: 17.00,
      category: 'Pide',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=500',
      available: true,
      preparationTime: '12-18 Minuten'
    },
    {
      id: 'pide-9',
      name: 'Pide Vegan',
      description: 'Veganes Pide mit pflanzlichen Zutaten',
      price: 17.00,
      category: 'Pide',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=500',
      available: true,
      preparationTime: '12-18 Minuten'
    },
    // SNACKS Kategorisi
    {
      id: 'snack-1',
      name: 'Classic Kebab mit Kalbfleisch',
      description: 'Traditioneller Döner mit Kalbfleisch, Salat und Saucen (Tasche oder Flade)',
      price: 12.00,
      category: 'Snacks',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
      available: true,
      preparationTime: '8-12 Minuten'
    },
    {
      id: 'snack-2',
      name: 'Schwarma Kebab',
      description: 'Schwarma mit Hähnchen-Döner, Salat und Saucen (Tasche oder Flade)',
      price: 12.00,
      category: 'Snacks',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
      available: true,
      preparationTime: '8-12 Minuten'
    },
    {
      id: 'snack-3',
      name: 'Vegan Kebab',
      description: 'Veganes Kebab mit Falafel und Gemüse (Tasche oder Flade)',
      price: 14.00,
      category: 'Snacks',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
      available: true,
      preparationTime: '10-15 Minuten'
    },
    {
      id: 'snack-4',
      name: 'Poulet Pepito vom Grill',
      description: 'Gegrilltes Hähnchen-Pepito mit Gewürzen',
      price: 15.00,
      category: 'Snacks',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
      available: true,
      preparationTime: '12-18 Minuten'
    },
    {
      id: 'snack-5',
      name: 'Poulet Kebab vom Grill mit Gemüse',
      description: 'Gegrilltes Hähnchen-Kebab mit frischem Gemüse',
      price: 15.00,
      category: 'Snacks',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
      available: true,
      preparationTime: '12-18 Minuten'
    },
    {
      id: 'snack-6',
      name: 'Lamm Pepito vom Grill',
      description: 'Gegrilltes Lamm-Pepito mit speziellen Gewürzen',
      price: 16.00,
      category: 'Snacks',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
      available: true,
      preparationTime: '15-20 Minuten'
    },
    {
      id: 'snack-7',
      name: 'Lamm Kebab vom Grill mit Gemüse',
      description: 'Gegrilltes Lamm-Kebab mit frischem Gemüse',
      price: 16.00,
      category: 'Snacks',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
      available: true,
      preparationTime: '15-20 Minuten'
    },
    {
      id: 'snack-8',
      name: 'Hamburger',
      description: 'Klassischer Hamburger mit Rindfleisch, Salat, Tomate und Saucen',
      price: 12.00,
      category: 'Snacks',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
      available: true,
      preparationTime: '10-15 Minuten'
    },
    {
      id: 'snack-9',
      name: 'Falafel',
      description: 'Knusprige Falafel mit Salat und Saucen (Tasche oder Flade)',
      price: 12.00,
      category: 'Snacks',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
      available: true,
      preparationTime: '10-15 Minuten'
    },
    {
      id: 'snack-10',
      name: 'Gyros mit Pommes',
      description: 'Griechisches Gyros mit Pommes Frites (Tasche oder Flade)',
      price: 14.00,
      category: 'Snacks',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
      available: true,
      preparationTime: '12-18 Minuten'
    },
    {
      id: 'snack-11',
      name: 'Tacos Kebab mit Käse und Pommes',
      description: 'Tacos mit Hähnchen-Kebab, Käse und Pommes Frites',
      price: 15.00,
      category: 'Snacks',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
      available: true,
      preparationTime: '15-20 Minuten'
    }
  ]);
  const [categories, setCategories] = useState<string[]>([
    'Box', 'Pizza', 'Pide', 'Snacks'
  ]);

  // Load menu items from localStorage on mount
  useEffect(() => {
    const savedItems = localStorage.getItem('menuItems');
    if (savedItems) {
      try {
        const parsed = JSON.parse(savedItems);
        setMenuItems(parsed);
      } catch (error) {
        console.error('Error loading menu items:', error);
      }
    }
  }, []);

  // Save menu items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('menuItems', JSON.stringify(menuItems));
  }, [menuItems]);

  const addMenuItem = (item: Omit<MenuItem, 'id'>) => {
    const newItem = {
      ...item,
      id: Date.now().toString()
    };
    setMenuItems(prev => [...prev, newItem]);
  };

  const updateMenuItem = (id: string, updates: Partial<MenuItem>) => {
    setMenuItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, ...updates } : item
      )
    );
  };

  const deleteMenuItem = (id: string) => {
    setMenuItems(prev => prev.filter(item => item.id !== id));
  };

  const addCategory = (category: string) => {
    setCategories(prev => prev.includes(category) ? prev : [...prev, category]);
  };
  const deleteCategory = (category: string) => {
    setCategories(prev => prev.filter(cat => cat !== category));
    // Ayrıca o kategoriye ait menü öğelerini de güncelleyebilirsiniz (isteğe bağlı)
  };

  const value = {
    menuItems,
    addMenuItem,
    updateMenuItem,
    deleteMenuItem,
    categories,
    addCategory,
    deleteCategory
  };

  return (
    <MenuContext.Provider value={value}>
      {children}
    </MenuContext.Provider>
  );
}
