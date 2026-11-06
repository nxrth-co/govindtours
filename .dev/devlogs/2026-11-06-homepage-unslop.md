# Devlog: Stripping the AI Slop Off the Front Desk

*Date: November 6, 2026*  
*Coffee count: 3 cups of strong pour-over*  
*Vibe: Clean air, razor-sharp hairlines, and zero AI neon nonsense*

---

Grab a mug, because today we gave the Govind Tours homepage the ultimate detox. 

You know that feeling when an AI builds a web page and decides that every single heading must be `font-extrabold tracking-widest` uppercase with glowing gradient cards and `hover:scale-105` bouncy buttons jumping at your cursor like an overexcited puppy? Yeah. We had a bit of that creeping in. 

Govind Tours isn't a speculative Silicon Valley crypto startup—it's a 15-year-old authorized travel desk on Sindhu Bhavan Marg in Bodakdev, Ahmedabad. When people book a flight to London or apply for a Schengen visa with Nikulbhai, they don't want purple radial gradients. They want exact dates, calm numbers, real airline desk turnaround times, and verified Google reviews.

So we ran the full **9-pass unslop protocol** on `src/app/page.tsx` and tuned up `src/components/ui/aperture-carousel.tsx`. Here's how it went down.

---

### The 9-Pass Surgery

#### 1. Spacing & Rhythm
We kicked out the erratic `space-y-20 lg:space-y-28` jumps. Everything now ticks on a strict 8px/16px/24px/32px grid rhythm (`space-y-16 lg:space-y-24`). All sibling cards now breathe with uniform `p-6` padding instead of random `p-8` vs `p-4` mismatches.

#### 2. Goodbye Multi-Hue Gradients, Hello Quiet Inks
Remember that `bg-gradient-to-br from-secondary to-slate-900` card and the rainbow of icon badges (purple for insurance, emerald for packages, amber for passport)? Gone. All icon containers now live in understated monochrome slate (`bg-slate-100 text-slate-700`). The single intentional accent color on the entire screen is Govind's signature ruby crimson (`#a10017`), reserved strictly for primary links and actions.

#### 3. Icons That Don't Scream
Stripped away the colored circular badge wraps. Lucide icons are dialed down to `strokeWidth={1.75}` at 16–20px. Clean, quiet, and legible.

#### 4. Grounded, Factual Copy
No more shouting in ALL CAPS like `OUR CAPABILITIES` or `THE GOVIND STANDARD`. We dropped all labels to subtle sentence case: `Capabilities`, `Handpicked Circuits`, and `Desk Assurance`. We put concrete operational details front and center: the actual Shilp Aaron office location, the 10 AM to 7 PM desk hours, and specific consular turnaround times.

#### 5. De-Shouting Typography
The Aperture Carousel title was sitting at weight 800 (extrabold). We dialed it down to a crisp, confident weight 600 with calibrated line heights. All metric stats now use `tabular-nums` so numbers like `2,000+` and `₹18,500` don't jitter or distort.

#### 6. Route Codes & Airport Notation
For our holiday cards, we added airport route tags (`AMD → GOI`, `AMD → COK`, `AMD → JAI → JDH`, `AMD → DEL → IXL`). It immediately feels like a genuine flight & holiday desk rather than a generic brochure.

#### 7. Nested Corner Radius Math
We aligned the corner curves geometrically:
- Outer carousel and major panels: `rounded-2xl` (16px)
- Cards: `rounded-xl` (12px)
- Badges and buttons: `rounded-lg` (8px)
No awkward outer corners tighter than inner elements.

#### 8. Authentic Visuals
The Aperture Carousel remains the hero star with real photography from Pangong Tso, Alleppey backwaters, and Mehrangarh Fort. Zero floating blur circles or fake decorative canvas noise.

#### 9. Calmed Motion
Threw `hover:scale-105` and `active:scale-95` into the dustbin. All interactive states now transition smoothly with `transition-colors duration-150` and gentle border shifts. 

---

### The Build Test
Ran `pnpm build` (`next build 15.5.27`). All 15 static routes compiled cleanly in 15.5s with zero type errors.

The homepage now looks like an editorial travel agency you can actually trust with your passport. Onward! 🚀

