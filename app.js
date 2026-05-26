//buckle up mfkers cause ur about to embark on a journey of me vibecoding at 6 am, powered only by a bunch of coffee, energy drinks and the
//sheer spite and motivation not to fail my ssm project...so grab a drink, somethink to eat if u not a broke ass and enjoy the mfking ride
//signed, your handsome dev, Albert
//(might have used ai to help me here and there, but not too much cause i hate that)




//Master Application Dataset Configuration
let isLoginMode = true;
let currentSelectedBookId = null;

const bookDatabase = [
    
    //SCI-FI
    { id: 2, title: "Dune", author: "Frank Herbert", genre: "Sci-Fi", maxPages: 617, img: "icons/dune_bookcover.jpeg" },
    { id: 4, title: "Neuromancer", author: "William Gibson", genre: "Sci-Fi", maxPages: 271, img: "icons/neuromancer_bookcover.jpg" },
    { id: 7, title: "All Tomorrows", author: "C.M. Kosemen", genre: "Sci-Fi", maxPages: 111, img: "icons/alltomorrows_bookcover.jpeg" },
    { id: 17, title: "Hyperion", author: "Dan Simmons", genre: "Sci-Fi", maxPages: 482, img: "icons/hyperion_bookcover.jpg" },
    { id: 20, title: "Project Hail Mary", author: "Andy Weir", genre: "Sci-Fi", maxPages: 476, img: "icons/projecthailmary_bookcover.jpeg" },
    { id: 23, title: "Do Androids Dream of Electric Sheep?", author: "Philip K. Dick", genre: "Sci-Fi", maxPages: 210, img: "icons/electricsheep_bookcover.jpeg" },
    { id: 24, title: "Foundation", author: "Isaac Asimov", genre: "Sci-Fi", maxPages: 255, img: "icons/foundation_bookcover.jpg" },
    { id: 26, title: "The Martian", author: "Andy Weir", genre: "Sci-Fi", maxPages: 369, img: "icons/themartian_bookcover.jpg" },
    { id: 27, title: "Snow Crash", author: "Neal Stephenson", genre: "Sci-Fi", maxPages: 470, img: "icons/snowcrash_bookcover.jpg" },
    { id: 28, title: "The Left Hand of Darkness", author: "Ursula K. Le Guin", genre: "Sci-Fi", maxPages: 304, img: "icons/lefthandofdarkness_bookcover.jpg" },
    { id: 29, title: "Rendezvous with Rama", author: "Arthur C. Clarke", genre: "Sci-Fi", maxPages: 243, img: "icons/rendezvouswithrama_bookcover.jpg" },
    { id: 30, title: "The Forever War", author: "Joe Haldeman", genre: "Sci-Fi", maxPages: 278, img: "icons/foreverwar_bookcover.jpg" },
    { id: 31, title: "Starship Troopers", author: "Robert A. Heinlein", genre: "Sci-Fi", maxPages: 263, img: "icons/starshiptroopers_bookcover.jpg" },
    { id: 32, title: "The Time Machine", author: "H.G. Wells", genre: "Sci-Fi", maxPages: 118, img: "icons/timemachine_bookcover.jpg" },
    { id: 33, title: "Contact", author: "Carl Sagan", genre: "Sci-Fi", maxPages: 432, img: "icons/contact_bookcover.jpg" },

    
    //DYSTOPIAN
    { id: 3, title: "1984", author: "George Orwell", genre: "Dystopian", maxPages: 328, img: "icons/1984_bookcover.jpg" },
    { id: 5, title: "Fahrenheit 451", author: "Ray Bradbury", genre: "Dystopian", maxPages: 158, img: "icons/fahrenheit 451_bookcover.jpg" },
    { id: 12, title: "Metro 2033", author: "Dmitry Glukhovsky", genre: "Dystopian", maxPages: 458, img: "icons/metro2033_bookcover.jpg" },
    { id: 13, title: "Metro 2034", author: "Dmitry Glukhovsky", genre: "Dystopian", maxPages: 300, img: "icons/metro2034_bookcover.jpg" },
    { id: 14, title: "Metro 2035", author: "Dmitry Glukhovsky", genre: "Dystopian", maxPages: 500, img: "icons/metro2035_bookcover.jpg" },
    { id: 16, title: "The Road", author: "Cormac McCarthy", genre: "Dystopian", maxPages: 287, img: "icons/theroad_bookcover.jpg" },
    { id: 18, title: "Brave New World", author: "Aldous Huxley", genre: "Dystopian", maxPages: 268, img: "icons/bravenewworld_bookcover.jpg" },
    { id: 34, title: "The Handmaid's Tale", author: "Margaret Atwood", genre: "Dystopian", maxPages: 311, img: "icons/handmaidstale_bookcover.jpg" },
    { id: 35, title: "Animal Farm", author: "George Orwell", genre: "Dystopian", maxPages: 141, img: "icons/animalfarm_bookcover.jpg" },
    { id: 36, title: "A Clockwork Orange", author: "Anthony Burgess", genre: "Dystopian", maxPages: 192, img: "icons/clockworkorange_bookcover.jpeg" },
    { id: 37, title: "Lord of the Flies", author: "William Golding", genre: "Dystopian", maxPages: 224, img: "icons/lordoftheflies_bookcover.jpg" },
    { id: 38, title: "The Children of Men", author: "P.D. James", genre: "Dystopian", maxPages: 241, img: "icons/childrenofmen_bookcover.jpg" },
    { id: 39, title: "We", author: "Yevgeny Zamyatin", genre: "Dystopian", maxPages: 226, img: "icons/we_bookcover.jpg" },
    { id: 40, title: "The Running Man", author: "Stephen King", genre: "Dystopian", maxPages: 304, img: "icons/runningman_bookcover.jpg" },
    { id: 41, title: "Station Eleven", author: "Emily St. John Mandel", genre: "Dystopian", maxPages: 333, img: "icons/stationeleven_bookcover.jpeg" },

    
    //CLASSIC LITERATURE
    { id: 8, title: "Crime and Punishment", author: "Fyodor Dostoevsky", genre: "Classic Literature", maxPages: 671, img: "icons/crimeandpunishment_bookcover.jpg" },
    { id: 9, title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", genre: "Classic Literature", maxPages: 796, img: "icons/brotherskaramazov_bookcover.jpg" },
    { id: 10, title: "The Metamorphosis", author: "Franz Kafka", genre: "Classic Literature", maxPages: 100, img: "icons/metamorphosis_bookcover.jpg" },
    { id: 11, title: "The Trial", author: "Franz Kafka", genre: "Classic Literature", maxPages: 255, img: "icons/thetrial_bookcover.jpg" },
    { id: 19, title: "The Stranger", author: "Albert Camus", genre: "Classic Literature", maxPages: 123, img: "icons/thestranger_bookcover.jpg" },
    { id: 22, title: "No Longer Human", author: "Osamu Dazai", genre: "Classic Literature", maxPages: 176, img: "icons/nolongerhuman_bookcover.jpg" },
    { id: 42, title: "Notes from Underground", author: "Fyodor Dostoevsky", genre: "Classic Literature", maxPages: 136, img: "icons/notesfromunderground_bookcover.jpg" },
    { id: 43, title: "The Idiot", author: "Fyodor Dostoevsky", genre: "Classic Literature", maxPages: 656, img: "icons/theidiot_bookcover.png" },
    { id: 44, title: "The Castle", author: "Franz Kafka", genre: "Classic Literature", maxPages: 316, img: "icons/thecastle_bookcover.jpg" },
    { id: 45, title: "The Myth of Sisyphus", author: "Albert Camus", genre: "Classic Literature", maxPages: 134, img: "icons/themythofsisyphus_bookcover.jpg" },
    { id: 46, title: "The Plague", author: "Albert Camus", genre: "Classic Literature", maxPages: 308, img: "icons/theplague_bookcover.jpg" },
    { id: 47, title: "Moby-Dick", author: "Herman Melville", genre: "Classic Literature", maxPages: 635, img: "icons/mobydick_bookcover.jpg" },
    { id: 48, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic Literature", maxPages: 180, img: "icons/thegreatgatsby_bookcover.jpg" },
    { id: 49, title: "Frankenstein", author: "Mary Shelley", genre: "Classic Literature", maxPages: 280, img: "icons/frankenstein_bookcover.jpg" },
    { id: 50, title: "The Picture of Dorian Gray", author: "Oscar Wilde", genre: "Classic Literature", maxPages: 250, img: "icons/doriangray_bookcover.jpeg" },

    //FANTASY / THRILLER
    { id: 1, title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy & Thriller", maxPages: 310, img: "icons/thehobbit_bookcover.jpeg" },
    { id: 6, title: "Blood Meridian", author: "Cormac McCarthy", genre: "Fantasy & Thriller", maxPages: 337, img: "icons/bloodmeridian_bookcover.jpg" },
    { id: 15, title: "The Institute", author: "Stephen King", genre: "Fantasy & Thriller", maxPages: 560, img: "icons/theinstitute_bookcover.jpg" },
    { id: 21, title: "The Silmarillion", author: "J.R.R. Tolkien", genre: "Fantasy & Thriller", maxPages: 365, img: "icons/thesilmarillion_bookcover.jpg" },
    { id: 25, title: "Blood of Elves", author: "Andrzej Sapkowski", genre: "Fantasy & Thriller", maxPages: 320, img: "icons/bloodofelves_bookcover.jpeg" },
    { id: 51, title: "The Fellowship of the Ring", author: "J.R.R. Tolkien", genre: "Fantasy & Thriller", maxPages: 423, img: "icons/fellowship_bookcover.jpg" },
    { id: 52, title: "The Two Towers", author: "J.R.R. Tolkien", genre: "Fantasy & Thriller", maxPages: 352, img: "icons/twotowers_bookcover.jpeg" },
    { id: 53, title: "The Return of the King", author: "J.R.R. Tolkien", genre: "Fantasy & Thriller", maxPages: 416, img: "icons/returnoftheking_bookcover.jpg" },
    { id: 54, title: "The Name of the Wind", author: "Patrick Rothfuss", genre: "Fantasy & Thriller", maxPages: 662, img: "icons/nameofthewind_bookcover.jpg" },
    { id: 55, title: "The Way of Kings", author: "Brandon Sanderson", genre: "Fantasy & Thriller", maxPages: 1007, img: "icons/wayofkings_bookcover.jpg" },
    { id: 56, title: "The Shining", author: "Stephen King", genre: "Fantasy & Thriller", maxPages: 447, img: "icons/theshining_bookcover.jpg" },
    { id: 57, title: "Misery", author: "Stephen King", genre: "Fantasy & Thriller", maxPages: 310, img: "icons/misery_bookcover.jpg" },
    { id: 58, title: "It", author: "Stephen King", genre: "Fantasy & Thriller", maxPages: 1138, img: "icons/it_bookcover.jpg" },
    { id: 59, title: "The Blade Itself", author: "Joe Abercrombie", genre: "Fantasy & Thriller", maxPages: 515, img: "icons/thebladeitself_bookcover.jpg" },
    { id: 60, title: "A Game of Thrones", author: "George R.R. Martin", genre: "Fantasy & Thriller", maxPages: 694, img: "icons/gameofthrones_bookcover.jpg" }
];

//Dynamic Radial Background Controller
window.addEventListener('mousemove', (e) => {
    const xPct = Math.round((e.clientX / window.innerWidth) * 100);
    const yPct = Math.round((e.clientY / window.innerHeight) * 100);
    
    const bgElement = document.getElementById('dynamic-bg');
    if (bgElement) {
        bgElement.style.setProperty('--mouse-x', `${xPct}%`);
        bgElement.style.setProperty('--mouse-y', `${yPct}%`);
    }
});

//View Port Router Engine
function showSection(sectionId) {
    document.getElementById('profile-gateway-screen').classList.add('hidden');
    document.getElementById('dashboard').classList.add('hidden');
    document.getElementById('profile-section').classList.add('hidden');
    document.getElementById('book-detail-section').classList.add('hidden');
    
    document.getElementById(sectionId).classList.remove('hidden');
}

//Gateway Interface Profiles Routine
function renderGatewayProfiles() {
    const container = document.getElementById('profiles-container');
    if (!container) return;
    container.innerHTML = "";
    
    let profileKeys = Object.keys(localStorage).filter(key => key.startsWith("user_"));

    if (profileKeys.length === 0) {
        document.getElementById('gateway-title').innerText = "No Profiles Found";
        container.innerHTML = `
            <div onclick="openAuthenticationModule()" class="group flex flex-col items-center justify-center cursor-pointer">
                <div class="w-28 h-28 border-2 border-dashed border-gray-600 rounded-md flex items-center justify-center text-4xl text-gray-500 group-hover:border-white group-hover:text-white transition">+</div>
                <span class="text-gray-500 mt-2 text-sm group-hover:text-white">Create Profile</span>
            </div>`;
        return;
    }

    document.getElementById('gateway-title').innerText = "Who's reading?";
    profileKeys.forEach(key => {
        const username = key.replace("user_", "");
        let userData = { avatarUrl: "" };
        try {
            userData = JSON.parse(localStorage.getItem(key)) || userData;
        } catch(e) {}
        
        const avatar = userData.avatarUrl || "";

        container.innerHTML += `
            <div onclick="selectProfile('${username}')" class="group flex flex-col items-center justify-center cursor-pointer">
                <div class="w-28 h-28 rounded-md bg-red-700 flex items-center justify-center text-3xl font-extrabold border-2 border-transparent group-hover:border-white transition duration-200 shadow-xl overflow-hidden">
                    ${avatar ? `<img src="${avatar}" class="w-full h-full object-cover">` : `<span>${username[0].toUpperCase()}</span>`}
                </div>
                <span class="text-gray-400 mt-3 text-sm group-hover:text-white font-medium transition">${username}</span>
            </div>`;
    });
}

function selectProfile(username) {
    localStorage.setItem("currentUser", username);
    loginSuccess(username);
}

//Authentication Module Window Controls
function openAuthenticationModule() { 
    document.getElementById('auth-modal-screen').classList.remove('hidden'); 
}
function closeAuthenticationModule() { 
    document.getElementById('auth-modal-screen').classList.add('hidden'); 
}
function toggleAuthMode() {
    isLoginMode = !isLoginMode;
    document.getElementById('auth-title').innerText = isLoginMode ? "Sign In" : "Sign Up";
    document.getElementById('primary-auth-btn').innerText = isLoginMode ? "Sign In" : "Register Account";
}

function handleAuth() {
    const user = document.getElementById('auth-username').value.trim();
    const pass = document.getElementById('auth-password').value.trim();
    if (!user || !pass) return alert("All fields are mandatory.");

    if (isLoginMode) {
        const stored = localStorage.getItem(`user_${user}`);
        if (!stored) return alert("User missing.");
        const userData = JSON.parse(stored);
        if (userData.password !== pass) return alert("Invalid credentials.");
        
        localStorage.setItem("currentUser", user);
        closeAuthenticationModule();
        loginSuccess(user);
    } else {
        if (localStorage.getItem(`user_${user}`)) return alert("Username taken.");
        
        let initialSavedBooks = {};
        bookDatabase.forEach(b => {
            initialSavedBooks[b.id] = { status: "Planning to Read", pagesRead: 0 };
        });

        localStorage.setItem(`user_${user}`, JSON.stringify({ password: pass, savedBooks: initialSavedBooks, avatarUrl: "" }));
        alert("Account created!");
        closeAuthenticationModule();
        renderGatewayProfiles();
    }
}

//FIXED LOGIN SUCCESS DIRECTION ROUTING
function loginSuccess(username) {
    // 1. Hide the entry gate completely and shift view instantly
    document.getElementById('profile-gateway-screen').classList.add('hidden');
    document.getElementById('navbar').classList.remove('hidden');
    showSection('dashboard');
    
    // 2. Safely bootstrap data objects down into rows
    renderLibraryRows(bookDatabase);
    
    // 3. Deferred execution fallback for tracking analytics
    try {
        updateProfileData();
    } catch(err) {
        console.error("Metric processing delayed:", err);
    }
}

function logout() {
    localStorage.removeItem("currentUser");
    location.reload();
}

//Interface Rendering Procedures
function renderLibraryRows(booksArray) {
    const container = document.getElementById('book-rows');
    if (!container) return;
    container.innerHTML = "";
    const genres = [...new Set(booksArray.map(b => b.genre))];

    genres.forEach((genre, index) => {
        const genreBooks = booksArray.filter(b => b.genre === genre);
        const rowId = `row-${index}`;
        
        // Wrap the row in a container that supports side arrow positioning
        let rowHTML = `
            <div class="space-y-2 relative group">
                <h3 class="text-sm font-bold tracking-widest uppercase text-gray-500 px-2">${genre}</h3>
                
                <div class="relative flex items-center">
                    <button onclick="slideRow('${rowId}', 'left')" class="absolute left-0 z-30 h-full w-12 bg-gradient-to-r from-gray-950 to-transparent text-white opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-start pl-2 text-xl font-black select-none">
                        &#10094;
                    </button>

                    <div id="${rowId}" class="flex space-x-4 overflow-x-auto pb-4 no-scrollbar w-full scroll-smooth">`;
        
        genreBooks.forEach(book => {
            rowHTML += `
                <div class="min-w-[160px] max-w-[160px] bg-gray-900 rounded p-3 border border-gray-800 flex flex-col justify-between cursor-pointer group hover:border-gray-700 transition" onclick="openBookTracker(${book.id})">
                    <img src="${book.img}" class="w-full h-40 object-cover rounded mb-2 shadow">
                    <h4 class="font-bold text-xs truncate">${book.title}</h4>
                    <p class="text-gray-500 text-[10px] truncate">${book.author}</p>
                </div>`;
        });

        rowHTML += `
                    </div>

                    <button onclick="slideRow('${rowId}', 'right')" class="absolute right-0 z-30 h-full w-12 bg-gradient-to-l from-gray-950 to-transparent text-white opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-end pr-2 text-xl font-black select-none">
                        &#10095;
                    </button>
                </div>
            </div>`;
            
        container.innerHTML += rowHTML;
    });
}

function openBookTracker(bookId) {
    currentSelectedBookId = bookId;
    const book = bookDatabase.find(b => b.id === bookId);
    const activeUser = localStorage.getItem("currentUser");
    const userData = JSON.parse(localStorage.getItem(`user_${activeUser}`));

    document.getElementById('detail-img').src = book.img;
    document.getElementById('detail-title').innerText = book.title;
    document.getElementById('detail-author').innerText = book.author;
    document.getElementById('detail-genre').innerText = book.genre;
    document.getElementById('detail-total-pages').innerText = book.maxPages;

    const trackingRecord = userData.savedBooks[bookId] || { status: "Planning to Read", pagesRead: 0 };
    document.getElementById('detail-status').value = trackingRecord.status;
    document.getElementById('detail-pages').value = trackingRecord.pagesRead;

    const cardContainer = document.getElementById('detail-card-container');
    if (cardContainer) {
        // Sets the background image mixed with a dark overlay so the red light behind it still pops
        cardContainer.style.backgroundImage = `linear-gradient(rgba(17, 24, 39, 0.85), rgba(11, 17, 30, 0.95)), url('${book.img}')`;
    }

    showSection('book-detail-section');
}

function saveTrackingMetrics() {
    const activeUser = localStorage.getItem("currentUser");
    const userData = JSON.parse(localStorage.getItem(`user_${activeUser}`));
    const targetBook = bookDatabase.find(b => b.id === currentSelectedBookId);
    
    let inputPages = parseInt(document.getElementById('detail-pages').value) || 0;
    let selectedStatus = document.getElementById('detail-status').value;

    if (inputPages > targetBook.maxPages) inputPages = targetBook.maxPages; 
    if (inputPages < 0) inputPages = 0;
    if (inputPages === targetBook.maxPages) selectedStatus = "Completed";

    if (!userData.savedBooks) userData.savedBooks = {};
    userData.savedBooks[currentSelectedBookId] = { status: selectedStatus, pagesRead: inputPages };
    localStorage.setItem(`user_${activeUser}`, JSON.stringify(userData));
    
    updateProfileData();
    showSection('dashboard');
}

function updateUserProfilePicture() {
    const activeUser = localStorage.getItem("currentUser");
    const imgUrl = document.getElementById('avatar-url-input').value.trim();
    if(!imgUrl) return alert("Provide a valid photo web link address.");

    const userData = JSON.parse(localStorage.getItem(`user_${activeUser}`));
    userData.avatarUrl = imgUrl;
    localStorage.setItem(`user_${activeUser}`, JSON.stringify(userData));
    
    alert("Profile picture updated!");
    updateProfileData();
}

//Metric Compilation Pipeline
function updateProfileData() {
    const activeUser = localStorage.getItem("currentUser");
    if (!activeUser) return;

    const userData = JSON.parse(localStorage.getItem(`user_${activeUser}`));
    if (!userData) return;
    
    // Auto-patch missing savedBooks maps on old user versions 
    if (!userData.savedBooks || Array.isArray(userData.savedBooks)) {
        userData.savedBooks = {};
        bookDatabase.forEach(b => {
            userData.savedBooks[b.id] = { status: "Planning to Read", pagesRead: 0 };
        });
        localStorage.setItem(`user_${activeUser}`, JSON.stringify(userData));
    }
    
    const userSavedBooksMap = userData.savedBooks;
    const avImg = userData.avatarUrl || "";
    
    if(avImg) {
        document.getElementById('profile-avatar-img').src = avImg;
        document.getElementById('profile-avatar-img').classList.remove('hidden');
        document.getElementById('profile-avatar-txt').classList.add('hidden');
        document.getElementById('nav-avatar-img').src = avImg;
        document.getElementById('nav-avatar-img').classList.remove('hidden');
        document.getElementById('nav-avatar-txt').classList.add('hidden');
    } else {
        document.getElementById('profile-avatar-txt').innerText = activeUser[0].toUpperCase();
        document.getElementById('profile-avatar-txt').classList.remove('hidden');
        document.getElementById('profile-avatar-img').classList.add('hidden');
        document.getElementById('nav-avatar-txt').innerText = activeUser[0].toUpperCase();
        document.getElementById('nav-avatar-txt').classList.remove('hidden');
        document.getElementById('nav-avatar-img').classList.add('hidden');
    }

    document.getElementById('profile-name').innerText = activeUser;

    let totalPagesRead = 0;
    let countPlanning = 0;
    let countReading = 0;
    let countCompleted = 0;
    let totalTracked = 0;

    const tableBody = document.getElementById('anime-list-rows');
    if (tableBody) {
        tableBody.innerHTML = "";

        Object.keys(userSavedBooksMap).forEach(idStr => {
            const bookId = parseInt(idStr);
            const book = bookDatabase.find(b => b.id === bookId);
            if (!book) return;

            const record = userSavedBooksMap[idStr] || { status: "Planning to Read", pagesRead: 0 };
            
            if (record.pagesRead > 0 || record.status !== "Planning to Read") {
                totalTracked++;
            }

            totalPagesRead += record.pagesRead;

            if (record.status === "Planning to Read") countPlanning++;
            if (record.status === "Reading") countReading++;
            if (record.status === "Completed") countCompleted++;

            const percentage = Math.round((record.pagesRead / book.maxPages) * 100) || 0;
            tableBody.innerHTML += `
                <tr class="hover:bg-gray-900 border-b border-gray-900">
                    <td class="p-4 font-bold text-white">${book.title}</td>
                    <td class="p-4 text-gray-400">${book.genre}</td>
                    <td class="p-4"><span class="px-2 py-0.5 rounded text-[10px] font-bold ${record.status === 'Completed' ? 'bg-green-500/20 text-green-400' : record.status === 'Reading' ? 'bg-blue-500/20 text-blue-400' : 'bg-yellow-500/20 text-yellow-400'}">${record.status}</span></td>
                    <td class="p-4">
                        <div class="text-[10px] text-gray-500 mb-1">${record.pagesRead} / ${book.maxPages} (${percentage}%)</div>
                        <div class="w-full bg-gray-900 h-1 rounded-full overflow-hidden"><div class="bg-red-600 h-full" style="width: ${percentage}%"></div></div>
                    </td>
                    <td class="p-4 text-center"><button onclick="openBookTracker(${book.id})" class="text-[11px] border border-gray-800 hover:border-white px-2 py-0.5 rounded transition">Edit</button></td>
                </tr>`;
        });
    }

    if(document.getElementById('stat-count')) document.getElementById('stat-count').innerText = totalTracked;
    if(document.getElementById('stat-pages')) document.getElementById('stat-pages').innerText = totalPagesRead;
    if(document.getElementById('stat-completed')) document.getElementById('stat-completed').innerText = countCompleted;
    if(document.getElementById('stat-planning')) document.getElementById('stat-planning').innerText = countPlanning;
}

function handleSearch() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const filtered = bookDatabase.filter(b => b.title.toLowerCase().includes(query) || b.genre.toLowerCase().includes(query));
    renderLibraryRows(filtered);
}

//FIXED BOOT ROUTINE
window.onload = function() {
    const existingSession = localStorage.getItem("currentUser");
    
    if (existingSession) {
        const storedUserData = localStorage.getItem(`user_${existingSession}`);
        
        if (storedUserData) {
            const parsedData = JSON.parse(storedUserData);
            
            if (!parsedData.savedBooks || Array.isArray(parsedData.savedBooks)) {
                localStorage.removeItem("currentUser");
                renderGatewayProfiles();
                showSection('profile-gateway-screen');
                return;
            }
            loginSuccess(existingSession);
        } else {
            localStorage.removeItem("currentUser");
            renderGatewayProfiles();
            showSection('profile-gateway-screen');
        }
    } else {
        renderGatewayProfiles();
        showSection('profile-gateway-screen');
    }
}

//Carousel Side Slider Action
function slideRow(rowId, direction) {
    const rowTrack = document.getElementById(rowId);
    if (!rowTrack) return;
    
    // Moves the track by 70% of the visible container width
    const scrollAmount = rowTrack.clientWidth * 0.7; 
    
    if (direction === 'left') {
        rowTrack.scrollLeft -= scrollAmount;
    } else {
        rowTrack.scrollLeft += scrollAmount;
    }
}