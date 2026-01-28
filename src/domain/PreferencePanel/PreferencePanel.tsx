/**
 * PreferencePanel Component
 *
 * UI for selecting and customizing domain templates and preferences.
 */
import { memo, useState, useCallback } from "react";
import { motion } from "framer-motion";

export interface DomainTemplateInfo {
  id: string;
  name: string;
  description?: string;
  domain: string;
  priorityKeywords: string[];
}

export interface PreferencePanelProps {
  templates: DomainTemplateInfo[];
  selectedTemplateId?: string;
  customKeywords?: string[];
  onTemplateSelect?: (templateId: string) => void;
  onKeywordsChange?: (keywords: string[]) => void;
  onSave?: () => void;
  className?: string;
}

export const PreferencePanel = memo(function PreferencePanel({
  templates,
  selectedTemplateId,
  customKeywords = [],
  onTemplateSelect,
  onKeywordsChange,
  onSave,
  className = "",
}: PreferencePanelProps) {
  const [newKeyword, setNewKeyword] = useState("");
  const selectedTemplate = templates.find((t) => t.id === selectedTemplateId);

  const handleAddKeyword = useCallback(() => {
    if (newKeyword.trim() && !customKeywords.includes(newKeyword.trim())) {
      onKeywordsChange?.([...customKeywords, newKeyword.trim()]);
      setNewKeyword("");
    }
  }, [newKeyword, customKeywords, onKeywordsChange]);

  const handleRemoveKeyword = useCallback(
    (keyword: string) => {
      onKeywordsChange?.(customKeywords.filter((k) => k !== keyword));
    },
    [customKeywords, onKeywordsChange],
  );

  return (
    <div className={`preference-panel ${className}`}>
      <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Search Preferences</h3>

      {/* Template Selection */}
      <div className="mb-4 sm:mb-6">
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
          Domain Template
        </label>
        <div className="grid grid-cols-2 gap-1.5 sm:gap-2 sm:grid-cols-3">
          {templates.map((template) => (
            <motion.button
              key={template.id}
              onClick={() => onTemplateSelect?.(template.id)}
              className={`p-2 sm:p-3 rounded-lg border text-left transition-colors touch-manipulation ${
                selectedTemplateId === template.id
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="font-medium text-xs sm:text-sm">{template.name}</div>
              <div className="text-[0.625rem] sm:text-xs text-gray-500 capitalize">
                {template.domain}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Template Keywords Preview */}
      {selectedTemplate && (
        <div className="mb-4 sm:mb-6">
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
            Template Keywords
          </label>
          <div className="flex flex-wrap gap-1">
            {selectedTemplate.priorityKeywords.slice(0, 8).map((keyword) => (
              <span
                key={keyword}
                className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-100 text-gray-600 rounded text-[0.625rem] sm:text-xs"
              >
                {keyword}
              </span>
            ))}
            {selectedTemplate.priorityKeywords.length > 8 && (
              <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-gray-400 text-[0.625rem] sm:text-xs">
                +{selectedTemplate.priorityKeywords.length - 8} more
              </span>
            )}
          </div>
        </div>
      )}

      {/* Custom Keywords */}
      <div className="mb-4 sm:mb-6">
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
          Custom Priority Keywords
        </label>
        <div className="flex gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
          <input
            type="text"
            value={newKeyword}
            onChange={(e) => setNewKeyword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddKeyword()}
            placeholder="Add keyword..."
            className="flex-1 px-2 sm:px-3 py-1.5 sm:py-2 border rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[2.75rem]"
          />
          <button
            onClick={handleAddKeyword}
            className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500 text-white rounded-lg text-xs sm:text-sm hover:bg-blue-600 touch-manipulation min-h-[2.75rem]"
          >
            Add
          </button>
        </div>
        {customKeywords.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {customKeywords.map((keyword) => (
              <span
                key={keyword}
                className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-blue-100 text-blue-700 rounded text-[0.625rem] sm:text-xs flex items-center gap-1"
              >
                {keyword}
                <button
                  onClick={() => handleRemoveKeyword(keyword)}
                  className="hover:text-blue-900 touch-manipulation"
                >
                  x
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Save Button */}
      {onSave && (
        <button
          onClick={onSave}
          className="w-full py-2 sm:py-2.5 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm sm:text-base touch-manipulation min-h-[2.75rem]"
        >
          Save Preferences
        </button>
      )}
    </div>
  );
});

export default PreferencePanel;
