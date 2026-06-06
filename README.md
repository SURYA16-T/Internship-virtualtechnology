**# Clock Projects

A collection of JavaScript clock applications featuring analog and digital time displays with styling.

## Projects

### 1. Analog Clock
**Location:** `image-spid/`

A classic analog clock with hour, minute, and second hands that rotate in real-time.

**Features:**
- Real-time hour, minute, and second hands
- Numbered clock face (1-12)
- Smooth hand rotation
- Responsive design

**Files:**
- `clock.html` - Main HTML structure
- `clock.js` - Clock logic and hand rotation
- `clock.css` - Styling and animations

**Usage:**
Open `image-spid/clock.html` in your browser to see the analog clock in action.

---

### 2. Retro Website Clock
**Location:** Root directory

A stylish retro-inspired clock featuring both analog display and digital time with date information.

**Features:**
- Analog clock with rotating hands
- Digital time display (HH:MM:SS AM/PM)
- Current date display (Day, Date Month Year)
- Day of week display
- Real-time updates every second

**Files:**
- `websiteclock.html` - Clock structure with HTML elements
- `websiteclock.js` - Clock logic for hands and digital display
- `websiteclock.css` - Styling and layout

**Usage:**
Open `websiteclock.html` in your browser to see the retro website clock.

---

## How It Works

Both clocks use JavaScript's `Date` object to:
1. Get current time (hours, minutes, seconds)
2. Calculate rotation angles for clock hands
3. Update the display every second using `setInterval()`

### Rotation Formula
- **Hour hand:** `(hours % 12) * 30 + minutes / 2` degrees
- **Minute hand:** `minutes * 6 + seconds / 10` degrees
- **Second hand:** `seconds * 6` degrees

---

## Browser Compatibility

Both projects work in all modern browsers that support:
- ES6 JavaScript
- CSS3 transforms and animations
- CSS Flexbox

---

## Customization

Feel free to modify:
- Colors in CSS files
- Hand sizes and styles
- Clock face design
- Date/time display format

---

## License

Free to use and modify for personal and educational purposes.
**
