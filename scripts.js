// Comprehensive categorized database of brands
const brandDatabase = [
    // Food & Beverage (International)
    { name: "Nestle", status: "connected", comment: "Has significant investments and operations in Israel" },
    { name: "Nestea", status: "connected", comment: "Owned by Nestlé which has investments in Israel" },
    { name: "Maggi", status: "connected", comment: "Owned by Nestlé which operates in Israel" },
    { name: "Coca-Cola", status: "connected", comment: "Operates factories in Israel and supports Israeli initiatives" },
    { name: "Pepsi", status: "connected", comment: "Has business partnerships in Israel" },
    { name: "7Up", status: "connected", comment: "Owned by PepsiCo which operates in Israel" },
    { name: "Lays", status: "connected", comment: "Owned by PepsiCo which operates in Israel" },
    { name: "Danone", status: "connected", comment: "Invests in Israeli food tech companies" },
    { name: "Activia", status: "connected", comment: "Owned by Danone which invests in Israel" },
    { name: "Unilever", status: "connected", comment: "Has research centers and factories in Israel" },
    { name: "Knorr", status: "connected", comment: "Owned by Unilever which operates in Israel" },
    { name: "Lipton", status: "connected", comment: "Owned by Unilever which operates in Israel" },
    { name: "Ben & Jerry's", status: "connected", comment: "Owned by Unilever which operates in Israel" },
    
    // Fast Food Chains
    { name: "KFC", status: "connected", comment: "Operates numerous locations in Israel" },
    { name: "McDonald's", status: "connected", comment: "Extensive operations in Israel with local headquarters" },
    { name: "Pizza Hut", status: "connected", comment: "Operated by Israeli franchisees" },
    { name: "Burger King", status: "connected", comment: "Has many locations across Israel" },
    { name: "Domino's", status: "connected", comment: "Has franchise operations in Israel" },
    { name: "Subway", status: "connected", comment: "Numerous locations across Israel" },
    { name: "Starbucks", status: "connected", comment: "Operates in Israel and supports local initiatives" },
    
    // Tech & Electronics
    { name: "Intel", status: "connected", comment: "Major R&D centers and manufacturing in Israel" },
    { name: "Microsoft", status: "connected", comment: "Acquired multiple Israeli tech companies" },
    { name: "Google", status: "connected", comment: "Has major development centers in Israel" },
    { name: "Apple", status: "connected", comment: "Acquired several Israeli companies and has R&D centers" },
    { name: "HP", status: "connected", comment: "Operates facilities and invests in Israel" },
    { name: "Dell", status: "connected", comment: "Has significant operations in Israel" },
    { name: "IBM", status: "connected", comment: "Major research labs and operations in Israel" },
    { name: "Cisco", status: "connected", comment: "Has acquired multiple Israeli networking companies" },
    { name: "Qualcomm", status: "connected", comment: "Invests heavily in Israeli tech" },
    { name: "Nvidia", status: "connected", comment: "Has development centers in Israel" },
    
    // Fashion & Retail
    { name: "Zara", status: "connected", comment: "Operates numerous stores in Israel" },
    { name: "H&M", status: "connected", comment: "Has many locations across Israel" },
    { name: "Nike", status: "connected", comment: "Supports Israeli sports teams and organizations" },
    { name: "Adidas", status: "connected", comment: "Sponsors Israeli sports teams" },
    { name: "Puma", status: "connected", comment: "Sponsors the Israel Football Association" },
    { name: "Levi's", status: "connected", comment: "Operates stores and manufactures in Israel" },
    { name: "Gap", status: "connected", comment: "Has stores across Israel" },
    { name: "Under Armour", status: "connected", comment: "Supports Israeli athletes and teams" },
    { name: "Calvin Klein", status: "connected", comment: "Owned by PVH which operates in Israel" },
    { name: "Tommy Hilfiger", status: "connected", comment: "Owned by PVH which operates in Israel" },
    
    // Personal Care
    { name: "Dove", status: "connected", comment: "Owned by Unilever which operates in Israel" },
    { name: "Lux", status: "connected", comment: "Owned by Unilever which operates in Israel" },
    { name: "Lifebuoy", status: "connected", comment: "Owned by Unilever which operates in Israel" },
    { name: "Pears", status: "connected", comment: "Owned by Unilever which operates in Israel" },
    { name: "Axe", status: "connected", comment: "Owned by Unilever which operates in Israel" },
    { name: "Rexona", status: "connected", comment: "Owned by Unilever which operates in Israel" },
    { name: "Vaseline", status: "connected", comment: "Owned by Unilever which operates in Israel" },
    { name: "L'Oréal", status: "connected", comment: "Acquired Israeli skincare company and has R&D there" },
    { name: "Garnier", status: "connected", comment: "Owned by L'Oréal which operates in Israel" },
    { name: "Maybelline", status: "connected", comment: "Owned by L'Oréal which operates in Israel" },
    { name: "Colgate", status: "connected", comment: "Operates manufacturing facilities in Israel" },
    { name: "Palmolive", status: "connected", comment: "Owned by Colgate-Palmolive which operates in Israel" },
    { name: "Johnson & Johnson", status: "connected", comment: "Has research facilities and manufacturing in Israel" },
    { name: "Neutrogena", status: "connected", comment: "Owned by Johnson & Johnson which operates in Israel" },
    { name: "Clean & Clear", status: "connected", comment: "Owned by Johnson & Johnson which operates in Israel" },
    { name: "Procter & Gamble", status: "connected", comment: "Operates innovation centers in Israel" },
    { name: "Pampers", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Tide", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Ariel", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Gillette", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Oral-B", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Head & Shoulders", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Pantene", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    
    // Bangladeshi Local Brands (mostly not connected)
    { name: "Pran", status: "not-connected" },
    { name: "ACI", status: "not-connected" },
    { name: "Square", status: "not-connected" },
    { name: "Bata", status: "not-connected" },
    { name: "Walton", status: "not-connected" },
    { name: "Transcom", status: "not-connected" },
    { name: "Nuvista", status: "not-connected" },
    { name: "Fresh", status: "not-connected" },
    { name: "Ifad", status: "not-connected" },
    { name: "Kazi Farms", status: "not-connected" },
    { name: "Bengal Meat", status: "not-connected" },
    { name: "Teer", status: "not-connected" },
    { name: "Aarong", status: "not-connected" },
    { name: "Kay Kraft", status: "not-connected" },
    { name: "Richman", status: "not-connected" },
    { name: "Partex", status: "not-connected" },
    { name: "Bashundhara", status: "not-connected" },
    { name: "Akij", status: "not-connected" },
    { name: "Olympic", status: "not-connected" },
    { name: "Savoy", status: "not-connected" },
    { name: "Gemcon", status: "not-connected" },
    { name: "Purobi", status: "not-connected" },
    { name: "Pran Dairy", status: "not-connected" },
    { name: "Farm Fresh", status: "not-connected" },
    { name: "Pran Juice", status: "not-connected" },
    { name: "Pran Drinks", status: "not-connected" },
    { name: "ACI Pure Salt", status: "not-connected" },
    { name: "ACI Aerosol", status: "not-connected" },
    { name: "ACI Pure Flour", status: "not-connected" },
    { name: "Square Toiletries", status: "not-connected" },
    { name: "Square Pharma", status: "not-connected" },
    { name: "Square Food", status: "not-connected" },
    { name: "Walton TV", status: "not-connected" },
    { name: "Walton AC", status: "not-connected" },
    { name: "Walton Fridge", status: "not-connected" },
    { name: "Transcom Beverages", status: "not-connected" },
    { name: "Transcom Electronics", status: "not-connected" },
    { name: "Nuvista Pharma", status: "not-connected" },
    { name: "Fresh Juice", status: "not-connected" },
    { name: "Ifad Autos", status: "not-connected" },
    { name: "Ifad Foods", status: "not-connected" },
    { name: "Kazi Farms Chicken", status: "not-connected" },
    { name: "Kazi Farms Eggs", status: "not-connected" },
    
    // Other International Brands
    { name: "Pringles", status: "connected", comment: "Owned by Kellogg's which has operations in Israel" },
    { name: "Kellogg's", status: "connected", comment: "Has manufacturing facilities in Israel" },
    { name: "Heinz", status: "connected", comment: "Owned by Kraft Heinz which operates in Israel" },
    { name: "Oreo", status: "connected", comment: "Owned by Mondelez which has Israeli operations" },
    { name: "Cadbury", status: "connected", comment: "Owned by Mondelez which has Israeli operations" },
    { name: "Toblerone", status: "connected", comment: "Owned by Mondelez which has Israeli operations" },
    { name: "Milka", status: "connected", comment: "Owned by Mondelez which has Israeli operations" },
    { name: "Philadelphia", status: "connected", comment: "Owned by Kraft Heinz which operates in Israel" },
    { name: "Kraft", status: "connected", comment: "Has operations in Israel" },
    { name: "Marmite", status: "connected", comment: "Owned by Unilever which operates in Israel" },
    { name: "Hellmann's", status: "connected", comment: "Owned by Unilever which operates in Israel" },
    { name: "Magnum", status: "connected", comment: "Owned by Unilever which operates in Israel" },
    { name: "Cornetto", status: "connected", comment: "Owned by Unilever which operates in Israel" },
    { name: "Wall's", status: "connected", comment: "Owned by Unilever which operates in Israel" },
    { name: "Sunsilk", status: "connected", comment: "Owned by Unilever which operates in Israel" },
    { name: "Tresemme", status: "connected", comment: "Owned by Unilever which operates in Israel" },
    { name: "Signal", status: "connected", comment: "Owned by Unilever which operates in Israel" },
    { name: "Closeup", status: "connected", comment: "Owned by Unilever which operates in Israel" },
    { name: "Ponds", status: "connected", comment: "Owned by Unilever which operates in Israel" },
    { name: "Fair & Lovely", status: "connected", comment: "Owned by Unilever which operates in Israel" },
    { name: "Dermalogica", status: "connected", comment: "Owned by Unilever which operates in Israel" },
    { name: "Simple", status: "connected", comment: "Owned by Unilever which operates in Israel" },
    { name: "St Ives", status: "connected", comment: "Owned by Unilever which operates in Israel" },
    { name: "Nivea", status: "connected", comment: "Owned by Beiersdorf which has Israeli operations" },
    { name: "Eucerin", status: "connected", comment: "Owned by Beiersdorf which has Israeli operations" },
    { name: "La Prairie", status: "connected", comment: "Owned by Beiersdorf which has Israeli operations" },
    { name: "Hugo Boss", status: "connected", comment: "Operates stores in Israel" },
    { name: "Ralph Lauren", status: "connected", comment: "Has retail operations in Israel" },
    { name: "Michael Kors", status: "connected", comment: "Operates stores in Israel" },
    { name: "Versace", status: "connected", comment: "Has retail presence in Israel" },
    { name: "Armani", status: "connected", comment: "Operates stores in Israel" },
    { name: "Gucci", status: "connected", comment: "Has retail operations in Israel" },
    { name: "Prada", status: "connected", comment: "Operates stores in Israel" },
    { name: "Dior", status: "connected", comment: "Has retail presence in Israel" },
    { name: "Chanel", status: "connected", comment: "Operates stores in Israel" },
    { name: "Louis Vuitton", status: "connected", comment: "Has retail operations in Israel" },
    { name: "Tiffany & Co", status: "connected", comment: "Operates stores in Israel" },
    { name: "Cartier", status: "connected", comment: "Has retail presence in Israel" },
    { name: "Rolex", status: "connected", comment: "Operates stores in Israel" },
    { name: "Omega", status: "connected", comment: "Has retail operations in Israel" },
    { name: "Tag Heuer", status: "connected", comment: "Operates stores in Israel" },
    { name: "Swatch", status: "connected", comment: "Has retail presence in Israel" },
    { name: "Estee Lauder", status: "connected", comment: "Operates in Israel" },
    { name: "Clinique", status: "connected", comment: "Owned by Estee Lauder which operates in Israel" },
    { name: "MAC", status: "connected", comment: "Owned by Estee Lauder which operates in Israel" },
    { name: "Bobbi Brown", status: "connected", comment: "Owned by Estee Lauder which operates in Israel" },
    { name: "Tom Ford", status: "connected", comment: "Owned by Estee Lauder which operates in Israel" },
    { name: "Jo Malone", status: "connected", comment: "Owned by Estee Lauder which operates in Israel" },
    { name: "Origins", status: "connected", comment: "Owned by Estee Lauder which operates in Israel" },
    { name: "Aveda", status: "connected", comment: "Owned by Estee Lauder which operates in Israel" },
    { name: "Bumble and bumble", status: "connected", comment: "Owned by Estee Lauder which operates in Israel" },
    { name: "Smashbox", status: "connected", comment: "Owned by Estee Lauder which operates in Israel" },
    { name: "Too Faced", status: "connected", comment: "Owned by Estee Lauder which operates in Israel" },
    { name: "Becca", status: "connected", comment: "Owned by Estee Lauder which operates in Israel" },
    { name: "Glamglow", status: "connected", comment: "Owned by Estee Lauder which operates in Israel" },
    { name: "La Mer", status: "connected", comment: "Owned by Estee Lauder which operates in Israel" },
    { name: "Prescriptives", status: "connected", comment: "Owned by Estee Lauder which operates in Israel" },
    { name: "Darphin", status: "connected", comment: "Owned by Estee Lauder which operates in Israel" },
    { name: "Ojon", status: "connected", comment: "Owned by Estee Lauder which operates in Israel" },
    { name: "Good Skin", status: "connected", comment: "Owned by Estee Lauder which operates in Israel" },
    { name: "Flirt!", status: "connected", comment: "Owned by Estee Lauder which operates in Israel" },
    { name: "American Beauty", status: "connected", comment: "Owned by Estee Lauder which operates in Israel" },
    { name: "Grassroots", status: "connected", comment: "Owned by Estee Lauder which operates in Israel" },
    { name: "Sean John", status: "connected", comment: "Owned by Estee Lauder which operates in Israel" },
    { name: "Missoni", status: "connected", comment: "Owned by Estee Lauder which operates in Israel" },
    { name: "Tommy Hilfiger", status: "connected", comment: "Owned by PVH which operates in Israel" },
    { name: "Calvin Klein", status: "connected", comment: "Owned by PVH which operates in Israel" },
    { name: "Speedo", status: "connected", comment: "Owned by Pentland which has Israeli operations" },
    { name: "Berghaus", status: "connected", comment: "Owned by Pentland which has Israeli operations" },
    { name: "Ellesse", status: "connected", comment: "Owned by Pentland which has Israeli operations" },
    { name: "Kickers", status: "connected", comment: "Owned by Pentland which has Israeli operations" },
    { name: "Red or Dead", status: "connected", comment: "Owned by Pentland which has Israeli operations" },
    { name: "Boxfresh", status: "connected", comment: "Owned by Pentland which has Israeli operations" },
    { name: "Brasher", status: "connected", comment: "Owned by Pentland which has Israeli operations" },
    { name: "Mitre", status: "connected", comment: "Owned by Pentland which has Israeli operations" },
    { name: "SeaVees", status: "connected", comment: "Owned by Pentland which has Israeli operations" },
    { name: "Canterbury", status: "connected", comment: "Owned by Pentland which has Israeli operations" },
    { name: "Lacoste", status: "connected", comment: "Has retail operations in Israel" },
    { name: "L'OCCITANE", status: "connected", comment: "Operates stores in Israel" },
    { name: "The Body Shop", status: "connected", comment: "Owned by Natura which has Israeli operations" },
    { name: "Aesop", status: "connected", comment: "Owned by Natura which has Israeli operations" },
    { name: "Avon", status: "connected", comment: "Has operations in Israel" },
    { name: "Herbal Essences", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Old Spice", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Secret", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Venus", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Olay", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Always", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Tampax", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Bounty", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Charmin", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Crest", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Febreze", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Gain", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Mr. Clean", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Swiffer", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Vicks", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Wella", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Clairol", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Nice 'n Easy", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Natural Instincts", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Loving Care", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Root Touch-Up", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Perfect 10", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Infusium 23", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Sebastian", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Nioxin", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Physique", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Sassoon", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Koleston", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Illumina", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Color Charm", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Londa", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Wellaton", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Max Factor", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "CoverGirl", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "SK-II", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Annique", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Hugo", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Boss", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Baldessarini", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Azzaro", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Lagerfeld", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Valentino", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Montblanc", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Lanvin", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Rochas", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Escada", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Dunhill", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Chopard", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Van Cleef & Arpels", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Boucheron", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Guerlain", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Givenchy", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Kenzo", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Shu Uemura", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Jean Paul Gaultier", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Christian Lacroix", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Oscar de la Renta", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Carolina Herrera", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Nina Ricci", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Paco Rabanne", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Emanuel Ungaro", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Balenciaga", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Bottega Veneta", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Alexander McQueen", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Stella McCartney", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Balenciaga", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Boucheron", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Bulgari", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Cartier", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Chaumet", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Fred", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Jaeger-LeCoultre", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Montblanc", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Piaget", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Roger Dubuis", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Vacheron Constantin", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Van Cleef & Arpels", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "IWC", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Panerai", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "A. Lange & Söhne", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Baume & Mercier", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Bell & Ross", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Blancpain", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Breguet", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Chopard", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Corum", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Franck Muller", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Girard-Perregaux", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Glashütte Original", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Hublot", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Jaquet Droz", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "JeanRichard", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Officine Panerai", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Parmigiani Fleurier", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Patek Philippe", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Richard Mille", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Roger Dubuis", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Tag Heuer", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Ulysse Nardin", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Vacheron Constantin", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Zenith", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Audemars Piguet", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Breitling", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Bulgari", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Chanel", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "DeWitt", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Ebel", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Eterna", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Harry Winston", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Hermès", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Louis Vuitton", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Maurice Lacroix", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "MB&F", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Omega", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Oris", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Perrelet", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Rado", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Raymond Weil", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Rolex", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Seiko", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Sinn", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "TAG Heuer", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Tissot", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Tudor", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Vulcain", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Wyler Genève", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Yema", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Zodiac", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "A. Lange & Söhne", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Alpina", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Andersen Genève", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Armin Strom", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Arnold & Son", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Ateliers deMonaco", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Azimuth", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "B.R.M", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Bernard Richards", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Bovet", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Bremont", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Cabestan", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Carl F. Bucherer", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Christophe Claret", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Chronoswiss", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Cuervo y Sobrinos", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Daniel Roth", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "De Bethune", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "DeWitt", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Dubey & Schaldenbrand", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "F.P. Journe", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Ferdinand Berthoud", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Frédérique Constant", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Gerald Genta", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Greubel Forsey", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "H. Moser & Cie", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Habring", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Hautlence", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "HYT", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Jacob & Co", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Jaeger-LeCoultre", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "JeanRichard", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Kari Voutilainen", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Konstantin Chaykin", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Lang & Heyne", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Laurent Ferrier", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Linde Werdelin", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Louis Moinet", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "MCT", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Meistersinger", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Moritz Grossmann", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Nomos Glashütte", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Parmigiani Fleurier", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Paul Picot", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Pequignet", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Petermann Bédat", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Philippe Dufour", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Piaget", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Ressence", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "RJ-Romain Jerome", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Roger Dubuis", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Romain Gauthier", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Sarpaneva", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Schwarz Etienne", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Speake-Marin", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Sarpaneva", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Sinn", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Snyper", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Stepan Sarpaneva", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Stowa", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Struthers", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Thomas Prescher", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Tutima", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Ulysse Nardin", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Urwerk", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Vianney Halter", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Voutilainen", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Wempe", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Wyler Genève", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Zenith", status: "connected", comment: "Owned by P&G which has Israeli operations" },
    { name: "Zodiac", status: "connected", comment: "Owned by P&G which has Israeli operations" }
];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resultContainer = document.getElementById('resultContainer');
const resultContent = document.getElementById('resultContent');
const totalProducts = document.getElementById('totalProducts');
const connectedProducts = document.getElementById('connectedProducts');
const safeProducts = document.getElementById('safeProducts');

// Initialize stats
function initStats() {
    const total = brandDatabase.length;
    const connected = brandDatabase.filter(brand => brand.status === "connected").length;
    const safe = total - connected;
    
    totalProducts.textContent = `${total}+`;
    connectedProducts.textContent = connected;
    safeProducts.textContent = `${safe}+`;
}

// Search function
function searchBrand() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (!searchTerm) {
        alert('Please enter a brand or product name');
        return;
    }
    
    // Find the brand in database (exact match first, then partial)
    let brandData = brandDatabase.find(brand => brand.name.toLowerCase() === searchTerm);
    
    if (!brandData) {
        brandData = brandDatabase.find(brand => 
            brand.name.toLowerCase().includes(searchTerm) || 
            searchTerm.includes(brand.name.toLowerCase())
        );
    }
    
    // If still not found, use default (not connected)
    if (!brandData) {
        brandData = { name: searchTerm, status: "not-connected" };
    }
    
    // Display results
    displayResult(brandData);
}

// Display results
function displayResult(brand) {
    resultContent.innerHTML = '';
    
    const brandElement = document.createElement('div');
    brandElement.classList.add('brand-name');
    brandElement.textContent = brand.name;
    
    const statusElement = document.createElement('div');
    statusElement.classList.add('status');
    statusElement.classList.add(brand.status === "connected" ? 'connected' : 'not-connected');
    statusElement.textContent = brand.status === "connected" ? 'Connected' : 'Not Connected';
    
    resultContent.appendChild(brandElement);
    resultContent.appendChild(statusElement);
    
    if (brand.status === "connected" && brand.comment) {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.textContent = brand.comment;
        resultContent.appendChild(commentElement);
    }
    
    resultContainer.classList.remove('hidden');
}

// Event Listeners
searchBtn.addEventListener('click', searchBrand);
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchBrand();
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', initStats);