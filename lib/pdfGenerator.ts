import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface PDFOptions {
  filename?: string;
  quality?: number;
  margin?: number;
  addWatermark?: boolean;
  addBranding?: boolean;
}

export const generatePDF = async (
  elementId: string,
  options: PDFOptions = {}
): Promise<void> => {
  const {
    filename = 'DeepTechLabs-Cloud-Health-Audit-Sample.pdf',
    quality = 1,
    margin = 10,
    addWatermark = true,
    addBranding = true
  } = options;

  try {
    // Get the element to convert
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error(`Element with id "${elementId}" not found`);
    }

    // Create canvas from HTML
    const canvas = await html2canvas(element, {
      scale: 2, // Higher resolution
      useCORS: true,
      allowTaint: false,
      backgroundColor: '#ffffff',
      removeContainer: true,
      logging: false,
      height: element.scrollHeight,
      width: element.scrollWidth
    });

    const imgData = canvas.toDataURL('image/png', quality);

    // Calculate PDF dimensions
    const imgWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    // Create PDF
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    // Add branding header to first page
    if (addBranding) {
      // Add DeepTechLabs branding
      pdf.setFontSize(16);
      pdf.setTextColor(15, 98, 254); // Blue-60
      pdf.text('DeepTechLabs', margin, margin + 10);

      pdf.setFontSize(10);
      pdf.setTextColor(82, 82, 82); // Gray-70
      pdf.text('Cloud Health & SaaS Integration Consulting', margin, margin + 18);

      // Add a line under the header
      pdf.setDrawColor(224, 224, 224); // Gray-20
      pdf.line(margin, margin + 22, imgWidth - margin, margin + 22);

      position = 30; // Start content below branding
    }

    // Add watermark function
    const addWatermarkToPage = () => {
      if (addWatermark) {
        // Save current state
        pdf.saveGraphicsState();

        // Set light gray color for watermark
        pdf.setTextColor(200, 200, 200); // Light gray
        pdf.setFontSize(35);

        // Calculate center position for watermark
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        // Add multiple watermark instances for better coverage
        for (let x = 50; x < pageWidth; x += 100) {
          for (let y = 50; y < pageHeight; y += 100) {
            pdf.text('SAMPLE', x, y, {
              angle: 45,
              align: 'center'
            });
          }
        }

        // Add main watermark at center
        pdf.setFontSize(45);
        pdf.setTextColor(15, 98, 254, 0.15); // Blue with very low opacity
        pdf.text('DEEPTECHLABS SAMPLE', pageWidth / 2, pageHeight / 2, {
          angle: 45,
          align: 'center'
        });

        // Restore previous state
        pdf.restoreGraphicsState();
      }
    };

    // Add first page with content
    addWatermarkToPage();
    pdf.addImage(imgData, 'PNG', margin, position, imgWidth - 2 * margin, (imgHeight * (imgWidth - 2 * margin)) / imgWidth);
    heightLeft -= pageHeight - position;

    // Add additional pages if needed
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight + (addBranding ? 30 : 0);
      pdf.addPage();
      addWatermarkToPage();

      if (addBranding) {
        // Add header to subsequent pages
        pdf.setFontSize(10);
        pdf.setTextColor(82, 82, 82);
        pdf.text('DeepTechLabs — Cloud Health Audit (Sample Report)', margin, margin + 5);
        pdf.line(margin, margin + 8, imgWidth - margin, margin + 8);
      }

      pdf.addImage(imgData, 'PNG', margin, addBranding ? 15 : margin, imgWidth - 2 * margin, (imgHeight * (imgWidth - 2 * margin)) / imgWidth);
      heightLeft -= pageHeight - (addBranding ? 15 : 0);
    }

    // Add footer with branding and metadata
    const totalPages = pdf.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      pdf.setPage(i);

      // Footer line
      pdf.setDrawColor(224, 224, 224);
      pdf.line(margin, pageHeight - 15, imgWidth - margin, pageHeight - 15);

      // Footer text
      pdf.setFontSize(8);
      pdf.setTextColor(111, 111, 111); // Gray-60
      pdf.text('DeepTechLabs.in', margin, pageHeight - 10);
      pdf.text('Cloud Infrastructure Consulting', margin, pageHeight - 6);

      // Page numbers
      pdf.text(`Page ${i} of ${totalPages}`, imgWidth - margin, pageHeight - 10, { align: 'right' });
      pdf.text('Sample Report — Not for Commercial Use', imgWidth - margin, pageHeight - 6, { align: 'right' });
    }

    // Add metadata
    pdf.setProperties({
      title: 'DeepTechLabs — Cloud Health Audit (Sample Report)',
      subject: 'Cloud Infrastructure Audit Report',
      author: 'DeepTechLabs',
      creator: 'DeepTechLabs Cloud Audit System',
      keywords: 'cloud, audit, AWS, cost optimization, infrastructure'
    });

    // Save the PDF
    pdf.save(filename);
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw new Error('Failed to generate PDF. Please try again.');
  }
};

export const downloadSampleReport = async (): Promise<void> => {
  return generatePDF('audit-report-content', {
    filename: 'DeepTechLabs-Sample-Audit-Report.pdf',
    quality: 0.95,
    margin: 15,
    addWatermark: true,
    addBranding: true
  });
};