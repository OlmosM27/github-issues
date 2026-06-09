import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { GithubLabel } from '../../interfaces';
import { CommonModule } from '@angular/common';
import { IssuesService } from '../../services/issues.service';

@Component({
  selector: 'issues-labels-selector',
  imports: [CommonModule],
  templateUrl: './labels-selector.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelsSelectorComponent {
  issuesSvc = inject(IssuesService);

  labels = input.required<GithubLabel[]>();

  isLabelSelected(labelName: string) {
    return this.issuesSvc.selectedLabels().has(labelName);
  }

  onToggleLabel(labelName: string) {
    this.issuesSvc.toggleLabel(labelName);
  }
}
