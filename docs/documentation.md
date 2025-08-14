# ID Card Builder – Component Reference

## Shared Definitions

| Term | Description |
|------|-------------|
| **Component Type** | Determines whether the component value is fixed (**Static**) or changes per ID card (**Dynamic**).<br>• **Static** – Same for all ID cards. Not included in manual/CSV mapping. Requires a fixed value.<br>• **Dynamic** – Changes per ID card. Included in manual/CSV mapping. |
| **Box Fit** | How an image or code is displayed inside its container:<br>• **Cover** – Fills the container; may crop content if the aspect ratio differs.<br>• **Scale** – Fits inside the container; may appear smaller if the aspect ratio differs.<br>• **Fill** – Stretches to fill the container; may distort content if the aspect ratio differs. |

---

## 1. Text Component

| Property | Description |
|----------|-------------|
| **Label** | Unique name of the component. **Required**. |
| **Text** | The text value to display. **Required**. |
| **Component Type** | See **Shared Definitions**. |
| **Font** | Typeface used for the text. |
| **Font Size** | Size of the text. |
| **Letter Spacing** | Space between characters. |
| **Alignment** | Left, center, or right alignment. |
| **Font Weight** | Thickness (e.g., normal, light, semi-bold, medium, bold, black). Some fonts may not support all weights. |
| **Font Style** | Regular or italic style. |
| **Text Overflow** | Behavior when text exceeds max width:<br>• **Resize** – Reduces font size to fit.<br>• **Ellipsis** – Truncates text and adds “…”.<br>• **New Line** – Wraps text to the next line. |
| **Maximum Width** | Maximum text width; behavior determined by **Text Overflow**. |

---

## 2. Image Component

| Property | Description |
|----------|-------------|
| **Label** | Unique name of the component. **Required**. |
| **Shape** | Rectangle, circle, hexagon, or diamond. **Required**. |
| **Component Type** | See **Shared Definitions**. |
| **Box Fit** | See **Shared Definitions**. |
| **Placeholder** | Default image when no photo is selected. |
| **Border Color** | Color of the border. |
| **Border Size** | Thickness of the border. |
| **Border Radius** | Corner roundness (rectangle only). |
| **Opacity** | Transparency level. |
| **Width (W)** | Width (rectangle only). |
| **Height (H)** | Height (rectangle only). |
| **Radius** | Radius (circle, hexagon, diamond only). |

---

## 3. Shape Component

*Note: Shapes do not appear in manual or CSV mapping details.*

| Property | Description |
|----------|-------------|
| **Shape Type** | Rectangle, circle, diamond, hexagon, or line. |
| **Background Color** | Fill color of the shape. |
| **Border Color** | Color of the border. |
| **Border Size** | Thickness of the border. |
| **Border Radius** | Corner roundness (rectangle only). |
| **Opacity** | Transparency level. |
| **Width (W)** | Width (rectangle only). |
| **Height (H)** | Height (rectangle only). |
| **Radius** | Radius (circle, hexagon, diamond only). |
| **Color** | Stroke color (line only). |
| **Stroke** | Stroke thickness (line only). |

---

## 4. Background Component

| Property | Description |
|----------|-------------|
| **Image** | Background image. **Required**. |
| **Box Fit** | See **Shared Definitions**. |
| **Border Color** | Color of the border. |
| **Border Size** | Thickness of the border. |
| **Border Radius** | Corner roundness of the border. |
| **Auto Fit Size** | If enabled, fills the entire ID card automatically. |
| **Opacity** | Transparency level. |
| **Width (W)** | Width of the background element. |
| **Height (H)** | Height of the background element. |
| **X Position** | Horizontal placement. |
| **Y Position** | Vertical placement. |

---

## 5. Barcode / QR Code Component

| Property | Description |
|----------|-------------|
| **Code Type** | Barcode or QR Code. |
| **Component Type** | See **Shared Definitions**. |
| **Box Fit** | See **Shared Definitions**. |
| **Width (W)** | Width of the code element. |
| **Height (H)** | Height of the code element. |