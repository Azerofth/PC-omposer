import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrl: './prompt.component.css'
})

export class PromptComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: SharedService) { }
  promptValue: string = '';
  computerList!: any[];
  partsNamelist!: any[];
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
      this.service.post('computer/getcomputer/', 1).subscribe(data => {
        this.computerList = Object.values(data);
      });
    }
    else if (matchingKeywords.includes('extreme') && matchingKeywords.includes('gaming')) {
      console.log('Both "extreme" and "gaming" exist');
      this.service.post('computer/getcomputer/', 2).subscribe(data => {
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
      this.service.post('computer/getcomputer/', 2).subscribe(data => {
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
}
