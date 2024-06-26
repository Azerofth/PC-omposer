import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../services/shared.service';
//Imports for the PDF conversion
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';



@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrl: './prompt.component.css'
})

export class PromptComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: SharedService) { }
  promptValue: string = '';
  computerList!: any[];
  value!: number;
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.promptValue = params['prompt'];
      console.log(this.promptValue);
      this.processPromptValue(this.promptValue);
    });
  }
  onRate(value: any) {
    this.value = value
    alert('thank you for your feedback');
  }

  processPromptValue(promptValue: string) {

    const lowercasePromptValue = promptValue.toLowerCase();

    // Split the prompt value into words
    const words = lowercasePromptValue.split(' ');

    // Define keywords to look for
    const keywords = ['budget', 'gaming', 'cheap', 'extreme', 'expensive', 'fast']; // Add your keywords here

    // Check if any keyword is present in the prompt value
    const matchingKeywords = keywords.filter(keyword => words.includes(keyword));

    // Based on the matching keywords, display corresponding data

    if (matchingKeywords.includes('budget') && matchingKeywords.includes('gaming')) {
      console.log('Both "budget" and "gaming" exist');
      this.service.post('computer/getcomputer/', 1).subscribe(data => {
        this.computerList = Object.values(data);
      });
    }
    else if (matchingKeywords.includes('cheap') && matchingKeywords.includes('gaming')) {
      console.log('Both "cheap" and "gaming" exist');
      this.service.post('computer/getcomputer/', 2).subscribe(data => {
        this.computerList = Object.values(data);
      });
    }
    else if (matchingKeywords.includes('extreme') && matchingKeywords.includes('gaming')) {
      console.log('Both "extreme" and "gaming" exist');
      this.service.post('computer/getcomputer/', 3).subscribe(data => {
        this.computerList = Object.values(data);
      });
    }
    else if (matchingKeywords.includes('expensive') && matchingKeywords.includes('gaming')) {
      console.log('Both "expensive" and "gaming" exist');
      this.service.post('computer/getcomputer/', 3).subscribe(data => {
        this.computerList = Object.values(data);
      });
    }
    else if (matchingKeywords.includes('fast') && matchingKeywords.includes('gaming')) {
      console.log('Both "fast" and "gaming" exist');
      this.service.post('computer/getcomputer/', 4).subscribe(data => {
        this.computerList = Object.values(data);
      });
    }
    else if (matchingKeywords.includes('fast') && matchingKeywords.includes('extreme')) {
      console.log('Both "fast" and "extreme" exist');
      this.service.post('computer/getcomputer/', 3).subscribe(data => {
        this.computerList = Object.values(data);
      });
    }
    else {
      // Check each keyword individually
      matchingKeywords.forEach(keyword => {
        switch (keyword) {
          case 'budget':
            console.log('Keyword "budget" matched');
            break;
          case 'gaming':
            console.log('Keyword "gaming" matched');
            break;
          case 'cheap':
            console.log('Keyword "cheap" matched');
            break;
          case 'extreme':
            console.log('Keyword "extreme" matched');
            break;
          case 'expensive':
            console.log('Keyword "expensive" matched');
            break;
          case 'fast':
            console.log('Keyword "fast" matched');
            break;
          // Add cases for additional keywords as needed
        }
      });
    }
  }
  public convetToPDF() {
    var data = document.getElementById('contentToConvert');
    if (data) {
      html2canvas(data).then(canvas => {
        // Few necessary setting options
        var imgWidth = 208;
        var pageHeight = 295;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        var heightLeft = imgHeight;
        const contentDataURL = canvas.toDataURL('image/png')
        let pdf = new jspdf('l', 'mm', 'a5'); // A4 size page of PDF
        var position = 0;
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
        pdf.save('computer_spec.pdf'); // Generated PDF
      });
    }
  }
}
